const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:uncle123@cluster0.7ueqk.mongodb.net/hasteBin?retryWrites=true&w=majority',{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=> {
    console.log('connection successful')
}).catch((err)=>{
    console.log(err);
})