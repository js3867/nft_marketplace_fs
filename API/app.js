// const fs = require('fs')
// const express = require('express')

// const app = express()
// app.use(express.json()) // express middleware, gives access to req data (recall req.body)

// // // get is an express method
// // // slash means index page
// // app.get('/', (req, res) => {
// //     // res.send('Hello I am your API')
// //     // ^^^data should always be sent in json format
// //     res.status(200).json({
// //         // 200 = ok
// //         message: 'Hello I am your API',
// //         api: 'NFT Marketplace',
// //     })
// // })

// // app.post('/', (req, res) => {
// //     res.status(201).json({
// //         // 201 = created
// //         message: 'Post request received',
// //     })
// // })

// const nfts = JSON.parse(fs.readFileSync(`${__dirname}/data/nft-simple.json`))

// // // GET METHOD -- REFACTORED BELOW
// // app.get('/api/v1/nfts', (req, res) => {
// //     res.status(200).json({
// //         status: 'success',
// //         results: nfts.length,
// //         data: {
// //             nfts: nfts,
// //         },
// //     })
// // })

// const getAllNfts = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: nfts.length.length,
//         data: {
//             nfts: nfts,
//         },
//     })
// }

// // // POST METHOD -- REFACTORED BELOW
// // app.post('/api/v1/nfts', (req, res) => {
// //     // res.status(201).json({
// //     //     message: 'NFT POSTED',
// //     // })
// //     const newId = nfts[nfts.length - 1].id + 1
// //     const newNft = Object.assign({ id: newId }, req.body)
// //     nfts.push(newNft)
// //     fs.writeFile(
// //         `${__dirname}/data/nft-simple.json`,
// //         JSON.stringify(nfts),
// //         (err) => {
// //             res.status(201).json({
// //                 status: 'success',
// //                 data: {
// //                     nft: newNft,
// //                 },
// //             })
// //         }
// //     )
// // })

// const createNft = (req, res) => {
//     const newId = nfts[nfts.length - 1].id + 1
//     const newNft = Object.assign({ id: newId }, req.body)

//     nfts.push(newNft)

//     fs.writeFile(
//         `${__dirname}/data/nft-simple.json`,
//         JSON.stringify(nfts),
//         (err) => {
//             res.status(201).json({
//                 status: 'success',
//                 data: {
//                     nft: newNft,
//                 },
//             })
//         }
//     )
// }

// // GET SINGLE NFT METHOD -- REFACTORED BELOW

// // app.get('/api/v1/nfts/:id/:id_a/:id_z?', (req, res) => {
// // app.get('/api/v1/nfts/:id', (req, res) => {
// //     // console.log(req.params) // params are params in url (id, seller, buyer, etc)
// //     const id = req.params.id * 1 // convert string > number
// //     const nft = nfts.find((el) => el.id === id) // _.find from express docs
// //     // validator
// //     // if (!nft) { // alt method
// //     if (id > nfts.length) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'Invalid ID',
// //         })
// //     }
// //     res.status(200).json({
// //         status: 'success',
// //         data: {
// //             nft: nft,
// //         },
// //     })
// // })

// const getSingleNft = (req, res) => {
//     const id = req.params.id * 1 // convert string > number
//     const nft = nfts.find((el) => el.id === id) // _.find from express docs

//     // validator
//     if (id > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: nft,
//         },
//     })
// }

// // PATCH METHOD = small update/amend (vs PUT = update entire data)
// // app.patch('/api/v1/nfts/:id', (req, res) => {
// //     //validate id
// //     if (req.params.id * 1 > nfts.length) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'Invalid ID',
// //         })
// //     }

// //     res.status(200).json({
// //         status: 'success',
// //         data: {
// //             nft: '<Updating NFT here...>',
// //         },
// //     })
// // })

// const updateNft = (req, res) => {
//     //validate id
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: '<Updating NFT here...>',
//         },
//     })
// }

// // DELETE METHOD
// //
// // app.delete('/api/v1/nfts/:id', (req, res) => {
// //     if (req.params.id * 1 > nfts.length) {
// //         return res.status(404).json({
// //             status: 'fail',
// //             message: 'Invalid ID',
// //         })
// //     }
// //     res.status(404).json({
// //         status: 'success',
// //         data: null,
// //     })
// // })

// const deleteNft = (req, res) => {
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(404).json({
//         status: 'success',
//         data: null,
//     })
// }

// // GROUPED TOGETHER
// // app.get('/api/v1/nfts', getAllNfts)
// // app.post('/api/v1/nfts', createNft)
// // app.get('/api/v1/nfts/:id', getSingleNft)
// // app.patch('/api/v1/nfts/:id', updateNft)
// // app.delete('/api/v1/nfts/:id', deleteNft)

// // REFACTORING ROUTES (grouping together)
// app.route('/api/v1/nfts').get(getAllNfts).post(createNft)
// app.route('/api/v1/nfts/:id')
//     .get(getSingleNft)
//     .patch(updateNft)
//     .delete(deleteNft)

// // PORT INFO
// const port = 3000
// app.listen(port, () => {
//     console.log(`Listening on port ${port}...`)
// })
// // %nodemon app.js  ...to run the server

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//          PART 2 - MIDDLEWARE                                             ////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs')
// const express = require('express')
// const morgan = require('morgan')

// const app = express()
// app.use(express.json()) // express middleware, gives access to req data (recall req.body)
// // app.use(morgan('dev')) // express middleware, logs requests to console
// app.use(morgan('tiny')) // express middleware, logs requests to console

// // CUSTOM MIDDLEWARE (EXPRESS SPECIALITY)
// // runs for every request executed AFTER (lower than) the middleware
// // app.use((req, res, next) => {
// //     console.log('Hello from the middleware!')
// //     next()
// // })

// // MIDDLEWARE TO ADD TIME TO REQUEST
// // app.use((req, res, next) => {
// //     req.requestTime = new Date().toISOString()
// //     next()
// // })

// const nfts = JSON.parse(fs.readFileSync(`${__dirname}/data/nft-simple.json`))

// // GET ALL NFTS METHOD
// const getAllNfts = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         requestTime: req.requestTime,
//         results: nfts.length.length,
//         data: {
//             nfts: nfts,
//         },
//     })
// }

// // CREATE NFT METHOD
// const createNft = (req, res) => {
//     const newId = nfts[nfts.length - 1].id + 1
//     const newNft = Object.assign({ id: newId }, req.body)

//     nfts.push(newNft)

//     fs.writeFile(
//         `${__dirname}/data/nft-simple.json`,
//         JSON.stringify(nfts),
//         (err) => {
//             res.status(201).json({
//                 status: 'success',
//                 data: {
//                     nft: newNft,
//                 },
//             })
//         }
//     )
// }

// // GET SINGLE NFT METHOD
// const getSingleNft = (req, res) => {
//     const id = req.params.id * 1 // convert string > number
//     const nft = nfts.find((el) => el.id === id) // _.find from express docs

//     // validator
//     if (id > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: nft,
//         },
//     })
// }

// // PATCH METHOD

// const updateNft = (req, res) => {
//     //validate id
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: '<Updating NFT here...>',
//         },
//     })
// }

// // DELETE METHOD

// const deleteNft = (req, res) => {
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(404).json({
//         status: 'success',
//         data: null,
//     })
// }

// // REFACTORING ROUTES (grouping together)
// app.route('/api/v1/nfts/').get(getAllNfts).post(createNft)

// app.route('/api/v1/nfts/:id')
//     .get(getSingleNft)
//     .patch(updateNft)
//     .delete(deleteNft)

// // PORT INFO
// const port = 3000
// app.listen(port, () => {
//     console.log(`Listening on port ${port}...`)
// })
// // %nodemon app.js  ...to run the server

// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// //////          PART 3 - USER ROUTING                                     //////
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs')
// const express = require('express')
// const morgan = require('morgan')

// const app = express()
// app.use(express.json())
// app.use(morgan('dev'))
// // app.use(morgan('tiny'))

// // MIDDLEWARE TO ADD TIME TO REQUEST
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })

// const nfts = JSON.parse(fs.readFileSync(`${__dirname}/data/nft-simple.json`))

// // GET ALL NFTS METHOD
// const getAllNfts = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         requestTime: req.requestTime,
//         results: nfts.length.length,
//         data: {
//             nfts: nfts,
//         },
//     })
// }

// // CREATE NFT METHOD
// const createNft = (req, res) => {
//     const newId = nfts[nfts.length - 1].id + 1
//     const newNft = Object.assign({ id: newId }, req.body)

//     nfts.push(newNft)

//     fs.writeFile(
//         `${__dirname}/data/nft-simple.json`,
//         JSON.stringify(nfts),
//         (err) => {
//             res.status(201).json({
//                 status: 'success',
//                 data: {
//                     nft: newNft,
//                 },
//             })
//         }
//     )
// }

// // GET SINGLE NFT METHOD
// const getSingleNft = (req, res) => {
//     const id = req.params.id * 1 // convert string > number
//     const nft = nfts.find((el) => el.id === id) // _.find from express docs

//     // validator
//     if (id > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: nft,
//         },
//     })
// }

// // PATCH METHOD
// const updateNft = (req, res) => {
//     //validate id
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             nft: '<Updating NFT here...>',
//         },
//     })
// }

// // DELETE METHOD
// const deleteNft = (req, res) => {
//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID',
//         })
//     }
//     res.status(404).json({
//         status: 'success',
//         data: null,
//     })
// }

// //---USERS

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         status: 'success',
//         message: 'Internal server error',
//     })
// }
// const getSingleUser = (req, res) => {
//     res.status(500).json({
//         status: 'success',
//         message: 'Internal server error',
//     })
// }
// const createUser = (req, res) => {
//     res.status(500).json({
//         status: 'success',
//         message: 'Internal server error',
//     })
// }
// const updateUser = (req, res) => {
//     res.status(500).json({
//         status: 'success',
//         message: 'Internal server error',
//     })
// }
// const deleteUser = (req, res) => {
//     res.status(500).json({
//         status: 'success',
//         message: 'Internal server error',
//     })
// }

// const nftsRouter = express.Router()
// const usersRouter = express.Router()

// // ROUTER NFTS
// nftsRouter.route('/').get(getAllNfts).post(createNft)
// nftsRouter.route('/:id').get(getSingleNft).patch(updateNft).delete(deleteNft)

// // ROUTER USERS
// usersRouter.route('/').get(getAllUsers).post(createUser)
// usersRouter
//     .route('/:id')
//     .get(getSingleUser)
//     .patch(updateUser)
//     .delete(deleteUser)

// app.use('/api/v1/nfts/', nftsRouter)
// app.use('/api/v1/users/', usersRouter)

// // app.route('/api/v1/nfts/').get(getAllNfts).post(createNft)
// // app.route('/api/v1/nfts/:id')
// // app.route('/api/v1/users/').get(getAllUsers).post(createUser)
// // app.route('/api/v1/users/:id')

// // PORT INFO
// const port = 3000
// app.listen(port, () => {
//     console.log(`Listening on port ${port}...`)
// })
// // %nodemon app.js  ...to run the server

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//////          PART 4 - USER ROUTING                                     //////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const express = require('express')
const morgan = require('morgan')

//--INTERNAL IMPORT
const nftsRouter = require('./routes/nftsRoute')
const usersRouter = require('./routes/usersRoute')

const app = express()
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config({ path: './.env' }) // needed for .env

// only log in development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// SERVING (STATIC) TEMPLATE, IMAGE, ETC FILES using express.static
app.use(express.static(`${__dirname}/img`))

// MIDDLEWARE TO ADD TIME TO REQUEST
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.use('/api/v1/nfts', nftsRouter)
app.use('/api/v1/users', usersRouter)

// const port = 3000
// app.listen(port, () => {
//     console.log(`Listening on port ${port}...`)
// })
//^^^exported this to server file (compartmentalize)

module.exports = app
