const fs = require('fs')

const nfts = JSON.parse(fs.readFileSync(`${__dirname}/../data/nft-simple.json`))

// .params for req
exports.checkID = (req, res, next, val) => {
    console.log(`NFT id is: ${val}`)
    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        })
    }
    next()
}

// checkBody for req
exports.checkBody = (req, res, next) => {
    // exports.checkBody = (req, res, next, val)  // this failed but didn't throw an error
    // console.log(`Checking body for: ${val}`)   // if use val, needs :id or similar value in route
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price',
        })
    }
    next()
}

exports.getAllNfts = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
        results: nfts.length.length,
        data: {
            nfts: nfts,
        },
    })
}
exports.createNft = (req, res) => {
    const newId = nfts[nfts.length - 1].id + 1
    const newNft = Object.assign({ id: newId }, req.body)

    nfts.push(newNft)

    fs.writeFile(
        `${__dirname}/data/nft-simple.json`,
        JSON.stringify(nfts),
        (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    nft: newNft,
                },
            })
        }
    )
}
exports.getSingleNft = (req, res) => {
    const id = req.params.id * 1 // convert string > number
    const nft = nfts.find((el) => el.id === id) // _.find from express docs

    if (id > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            nft: nft,
        },
    })
}
exports.updateNft = (req, res) => {
    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            nft: '<Updating NFT here...>',
        },
    })
}
exports.deleteNft = (req, res) => {
    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        })
    }
    res.status(404).json({
        status: 'success',
        data: null,
    })
}
