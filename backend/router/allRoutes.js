const router = require('express').Router()
const converterCompresser = require('../controller/converterCompresser.js')
const multer = require('multer')
const upload = multer({dest:'upload'})
router.post('/converter',upload.single('image'),converterCompresser.converter)
router.post('/compresser',upload.single('image'),converterCompresser.compresser)
module.exports = router


