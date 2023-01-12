const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 4000


const app = express()
app.use(cors())

app.get("*", (req,res)=>{
    res.json({name:"Symon Lopez"})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))