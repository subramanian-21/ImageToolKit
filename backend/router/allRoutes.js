const router = require('express').Router()
const allController = require('../controller/allConverters')
const multer = require('multer')
const upload = multer({dest:'upload'})
router.post('/converter',upload.single('image'),allController.converter)
router.post('/compresser',upload.single('image'),allController.compresser)
module.exports = router


