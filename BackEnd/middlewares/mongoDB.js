const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://aparnasj:aparnasj15@cluster0.fpnhbfk.mongodb.net/LibraryApp?retryWrites=true&w=majority', {
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})