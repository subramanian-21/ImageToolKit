const jimp = require("jimp");
const path = require("path");
const fs = require("fs");
const converterCompresser = {
  converter: async (req, res) => {
    try {
      const imagePath = req.file.path;
      const image = await jimp.read(imagePath);
      const toFormat = req.body.format;

      const convertedImageName = `converted.${toFormat}`;
      const convertedImage = "converted/" + convertedImageName;
      await image.writeAsync(convertedImage);
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
          console.log("send successfully");
          fs.unlink(convertedImagePath, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted converted");
            }
          });
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted upload");
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
      const imagePath = req.file.path;
      const image = await jimp.read(imagePath);
      const quality = req.body.quality;
      const imageName = req.file.originalname;
      const imageSplitArray = imageName.split(".");
      const imageSplitArrayLength = imageSplitArray.length;
      const imageFormat = imageSplitArray[imageSplitArrayLength - 1];

      const convertedImageName = `converted.${imageFormat}`;
      const convertedImagePath = "converted/" + convertedImageName;
      await jimp.quality(quality).writeAsync(convertedImagePath);
      const convertedImageAbsolutePath = path.resolve(
        __dirname,
        "../converted",
        convertedImageName
      );

      res.set("Content-Type", `image/${imageFormat}`);
      res.sendFile(convertedImageAbsolutePath, (err) => {
        if (err) {
          console.error("File sending error:", err);
          res.status(500).send("Error sending the file.");
        } else {
          console.log("send successfully");
          fs.unlink(convertedImagePath, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted converted");
            }
          });
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted upload");
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
