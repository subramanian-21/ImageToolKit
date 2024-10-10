const router = require('express').Router()
const compresser = require('../controller/compressor.js')
const convertor = require('../controller/convertor.js')
const multer = require('multer')
const upload = multer({dest:'upload'})
const grayScale = require('../controller/grayScale.js')
const resize = require('../controller/resizer.js')
const imgs2pdf = require('../controller/imgs2pdf.js')

router.post('/converter',upload.single('image'), compresser)
router.post('/compresser',upload.single('image'), convertor)
router.post('/grayscale',upload.single('image'),grayScale)
router.post('/resize',upload.single('image'),resize)
router.post('/imgs2pdf',upload.array('images'),imgs2pdf)

module.exports = router


