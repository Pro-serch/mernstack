const mongoose =require('mongoose');

const DB= process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log(`connection successful`);
}).catch((error)=>{
    console.log(`no connection`)
});    


// {
//     useNewUrlParser:true,
//     useCreateIndex:true,             this is callback fun
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }
