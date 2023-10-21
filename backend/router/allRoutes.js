const router = require('express').Router()
const converterCompresser = require('../controller/converterCompresser.js')
const multer = require('multer')
const upload = multer({dest:'upload'})
const grayScale = require('../controller/grayScale.js')
router.post('/converter',upload.single('image'),converterCompresser.converter)
router.post('/compresser',upload.single('image'),converterCompresser.compresser)
router.post('/grayscale',upload.single('image'),grayScale)
module.exports = router


