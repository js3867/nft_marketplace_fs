const express = require('express')
const usersController = require('../controllers/usersControllers')
// const {
//     getAllUsers,
//     createUser,
//     getSingleUser,
//     updateUser,
//     deleteUser,
// } = require('../controllers/usersControllers')

const router = express.Router()

// ROUTER USERS
router
    .route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
router
    .route('/:id')
    .get(usersController.getSingleUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router
