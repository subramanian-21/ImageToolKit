const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },  // Adjust file size limit
});

router.post('/imgs2pdf', upload.array('images'), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded.' });
    }

    // Your PDF creation logic
    const pdfDoc = await PDFDocument.create();
    await Promise.all(files.map(async (file) => {
      const page = pdfDoc.addPage();
      const imageBuffer = file.buffer;
      const jpgImage = await pdfDoc.embedJpg(imageBuffer); // Assuming JPG for simplicity
      const { width, height } = jpgImage.scale(1);
      page.setSize(width, height);
      page.drawImage(jpgImage, { x: 0, y: 0, width, height });
    }));

    const pdfBytes = await pdfDoc.save();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="output.pdf"',
    });
    res.send(pdfBytes);
  } catch (error) {
    console.error('Error processing files:', error);
    res.status(500).json({ message: 'Error processing files.' });
  }
});

module.exports = router;
