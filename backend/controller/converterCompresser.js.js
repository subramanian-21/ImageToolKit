const jimp = require("jimp");
const path = require("path");
const sharp = require('sharp')
const fs = require("fs");
const converterCompresser = {
  converter: async (req, res) => {
    try {
      const imagePath = req.file.path;
      const toFormat = req.body.format;

      const convertedImageName = `converted.${toFormat}`;
      const convertedImage = "converted/" + convertedImageName;
      const image = await jimp.read(imagePath);
      const imageFormat = req.file.originalname.split('.')[1]

   
      await image.quality(60).writeAsync(convertedImage)
      const convertedImagePath = path.resolve(
          __dirname,
          "../converted",
          convertedImageName
        );
        res.set("Content-Type", `image/${imageFormat}`);
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
  },
  compresser: async (req, res) => {
    try {
     
      const quality = Number(req.body.quality);
      const imagePath = req.file.path;
      const image = await jimp.read(imagePath);
      const imageFormat = req.file.originalname.split('.')[1]
      const convertedImageName = `converted.${imageFormat}`
      const convertedImage = `converted/`+convertedImageName
   
      await image.quality(quality).writeAsync(convertedImage)
      const convertedImagePath = path.resolve(
          __dirname,
          "../converted",
          convertedImageName
        );
        res.set("Content-Type", `image/${imageFormat}`);
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
  },
};
module.exports = converterCompresser;
