const path = require("path");
const sharp = require('sharp')
const fs = require("fs");
const Compressor = async (req, res) => {
 
    try {
     
      const quality = Number(req.body.quality);
      const imagePath = req.file.path;
      const format = req.file.originalname.split('.')[1]
      const convertedImageName = `converted.${format}`
      const convertedImage = `converted/`+convertedImageName
   
     
      const resizedImage = sharp(imagePath);
      if (format === "jpg" || format === "jpeg") {
        resizedImage.jpeg({ quality: quality });
      } else if (format === "png") {
        resizedImage.png({ quality: 9-Math.floor(quality/10) });
      } else if (format === "webp") {
        resizedImage.webp({ quality: quality });
      } else if (format === "gif") {
        resizedImage.gif({ quality: quality });
      } else {
        console.log("format error");
      }
      await resizedImage.withMetadata().toFile(convertedImage);
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
      console.error("Image compression error:", error);
      res.status(500).send("Image conversion failed.");
    }
};
module.exports = Compressor;
