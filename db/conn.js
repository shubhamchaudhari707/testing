const mongoose = require("mongoose")

// const baseurl = `mongodb+srv://shubhamchaudhari707:CVYMJGnt4c6Ub88j@cluster0.pjlxhfh.mongodb.net/`
const baseurl = `mongodb+srv://shubhamchaudhari707:shubham@cluster0.pjlxhfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = mongoose.connect(baseurl, {

}).then(() => {
    console.log("connection sucessful *** ")
}).catch((error) => {
    console.log(error)
})


module.exports = connectDB






