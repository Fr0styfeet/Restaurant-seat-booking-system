const express = require('express')
const router = express.Router()

router.post('/pizzadata',(req,res)=>{
    try {
        // console.log(global.pizzas)
        res.send(global.pizzas)
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

module.exports= router;
