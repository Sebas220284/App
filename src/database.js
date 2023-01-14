const mongoose= require('mongoose');

const MONGODB_URI=process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI,{
useUnifiedTopology:true,
useNewUrlParser:true


  

})
.then(db=>console.log('data is coneccted'))

.catch(err=> console.log(err))




//const MONGODB_URI='mongodb://localhostjkkk/notes-app'

//mongoose.connect(MONGODB_URI)
// .connect("mongodb://127.0.0.1:27017")

//.then(() => {
 // console.log("Connected to Database");
//})
//.catch((err) => {
 // console.log("Not Connected to Database ERROR! ", err);
//});