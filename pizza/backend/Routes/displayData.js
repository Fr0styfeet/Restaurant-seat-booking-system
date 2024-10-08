const express = require('express')
const router = express.Router()

router.post('/pizzadata',(req,res)=>{
    try {
        console.log(global.restro)
        res.send(global.restro)
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

module.exports= router;
