const jimp = require('jimp')
const multer = require('multer')
const upload = multer({dest:'upload'})
const path = require('path')
const fs = require('fs')
const allController = {
   
    converter: async (req, res) => {
        
        
        try {
          // Load the image from the buffer
          const image = await jimp.read(req.file.path);
          const convertedImage = 'converted/converted.jpg'
         ;
          // Perform image conversion (e.g., to a different format)
          await image.quality(60).writeAsync(convertedImage); // Change format and set quality
    
          // Send the converted image as a response
          const convertedImagePath = path.resolve(__dirname, convertedImage)

            bool =  fs.existsSync(path.resolve(__dirname))
            console.log(bool,path.resolve(__dirname,'converted','converted.jpg'))

            res.set('Content-Type', 'image/jpeg');
           res.sendFile(path.resolve(__dirname,'converted','converted.jpg'), (err) => {
              if (err) {
                console.error('File sending error:', err);
                res.status(500).send('Error sending the file.');
              }else{
                console.log("send successfully")
              }
            })
        } catch (error) {
          console.error('Image conversion error:', error);
          res.status(500).send('Image conversion failed.');
        }
      },
}
module.exports = allController