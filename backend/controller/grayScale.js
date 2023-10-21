const jimp = require("jimp")
const path = require('path')
const fs = require('fs')

const grayScale = async (req,res) =>{
try {
    const imagePath = req.file.path;
    const image = await jimp.read(imagePath);
    const imageFormat = req.file.originalname.split('.')[1]
    const convertedImageName = `converted.${imageFormat}`
    const convertedImage = `converted/`+convertedImageName
    await image.quality(60).grayscale().writeAsync(convertedImage)
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
    console.log(error)
}
}
module.exports = grayScale