const express = require("express")
const router = express.Router()


router.get("/getadmin", async (req, res) => {
    console.log("testing")
})


module.exports = router