const mongoose = require('mongoose')
const db = 'mongodb+srv://Rishabh:xg1MJzcAWBYjhar3@miglab.lycds.mongodb.net/miglabdb?retryWrites=true&w=majority'  
mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));