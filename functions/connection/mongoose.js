const mongoose = require('mongoose')
const db = '' //database url removed for security reasons.   
mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));