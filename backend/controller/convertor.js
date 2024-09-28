const path = require("path");
const sharp = require('sharp')
const fs = require("fs");
const Convertor = async (req, res) =>{
        try {
          const imagePath = req.file.path;
          const toFormat = req.body.format;
    
          const convertedImageName = `converted.${toFormat}`;
          const convertedImage = "converted/" + convertedImageName;
    
          const resizedImage = sharp(imagePath);
          await resizedImage.withMetadata().toFile(convertedImage);
          const convertedImagePath = path.resolve(
              __dirname,
              "../converted",
              convertedImageName
            );
            res.set("Content-Type", `image/${toFormat}`);
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
}
module.exports = Convertor;