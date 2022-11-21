const express = require('express')
const { findById } = require('../models/book')
const router = express.Router()
const DATA = require('../models/book')

// get data from db

router.get('/booklist', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})

// get single data from db

router.get('/book/:id', async (req, res) => {
    try {

        let id = req.params.id
        const singleBook = await DATA.findById(id)
        res.send(singleBook)

    } catch (error) {
        console.log(error)

    }
})

// send data from db

router.post('/book', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            takenDate: req.body.takenDate,
            returnDate: req.body.returnDate
        }


        const newBook = new DATA(item) //to check incoming data
        const saveBook = await newBook.save() //mongoDB save

        res.send(saveBook)


    } catch (error) {

        console.log(error)
    }
})

// delete a employee data from db
router.delete('/book/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deleteBook = await DATA.findByIdAndDelete(id)
        res.send(deleteBook)


    } catch (error) {
        console.log(error)

    }
})

// Update  a employee data from db


router.put('/book', async (req, res) => {
    try {

        let id = req.body.id
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            takenDate: req.body.takenDate,
            returnDate: req.body.returnDate
        }
        let updateData = { $set: item }
        let updateBook = await DATA.findByIdAndUpdate({ 'id': id }, updateData)
        res.send(updateBook)
    } catch (error) {
        console.log(error)

    }
})

module.exports = router