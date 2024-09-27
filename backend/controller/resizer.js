const jimp = require("jimp");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp")
const resizer = async (req, res) => {
  try {
    const imagePath = req.file.path;
    const width = Number(req.body.width);
    const height = Number(req.body.height);
    const lock = req.body.lock === 'true';
    
    const format = req.file.originalname.split('.')[1]
    const convertedImageName = `converted.${format}`
    const convertedImage = "converted/" + convertedImageName;

    const resizedImage = sharp(imagePath);
    if (lock) {
            
      const imageMetadata = await resizedImage.metadata();
      const imageAspectRatio = imageMetadata.width / imageMetadata.height;
      let reWidth,reHeight;
      if (imageAspectRatio > width / height) {
        reHeight = Math.floor(width / imageAspectRatio);
      } else {
        reWidth = Math.floor(height * imageAspectRatio);
      }
  
      await resizedImage
        .withMetadata()
        .resize({ width: reWidth, height: reHeight, fit: "inside" })
        .toFile(convertedImage);
    } else {
      await resizedImage
        .withMetadata()
        .resize({ width: width, height: height, fit: "fill" })
        .toFile(convertedImage);
    }
    const convertedImagePath = path.resolve(
        __dirname,
        "../converted",
        convertedImageName
      );
      res.set("Content-Type", `image/${format}`);
      res.sendFile(convertedImagePath, (err) => {
        if (err) {
          console.error("File sending error:", err);
          res.status(500).send("Error sending the file.");
        } else {
            fs.unlink(convertedImagePath, (err) => {
                if (err) {
                  console.log(err);
                } else {
                }
              });
              fs.unlink(imagePath, (err) => {
                if (err) {
                  console.log(err);
                } else {
    
                }
              });
            }
          });
  } catch (error) {
    console.error("Image conversion error:", error);
    res.status(500).send("Image conversion failed.");
  }
};
module.exports = resizer;
