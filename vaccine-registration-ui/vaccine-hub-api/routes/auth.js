const express = require('express')
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        //take the users email and pw attempting to authenticate them
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
})

module.exports = router 
