const { registerUser, getUser } = require("../controller/userController")


const express = require("express")
const router = express.Router()

router.post("/register", registerUser)
router.get("/getuser", getUser)


module.exports = router












