const express = require('express')
const nftsController = require('../controllers/nftsControllers')
// const {
//     getAllNfts,
//     createNft,
//     getSingleNft,
//     updateNft,
//     deleteNft,
// } = require('../controllers/nftsControllers')

const router = express.Router()

// CUSTOM MIDDLEWARE
// .params for req, .param for router
router.param('id', nftsController.checkID)

// ROUTER NFTS
router
    .route('/')
    .get(nftsController.getAllNfts)
    .post(nftsController.checkBody, nftsController.createNft) // multicheck (note order)
router
    .route('/:id')
    .get(nftsController.getSingleNft)
    .patch(nftsController.updateNft)
    .delete(nftsController.deleteNft)

module.exports = router
