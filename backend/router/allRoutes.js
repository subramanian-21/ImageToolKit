const router = require('express').Router()
const allController = require('../controller/allConverters')
const multer = require('multer')
const upload = multer({dest:'upload'})
router.post('/upload',upload.single('image'),allController.converter)

module.exports = router


