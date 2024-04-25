const express= require('express');
const app =express();
const port=process.env.PORT||3000;
const Elect=require('./store1/routesStore1/electricity');
const wood=require('./store1/routesStore1/Wood');
const Plumbing=require('./store1/routesStore1/Plumbing');
const YouthCare=require('./store1/routesStore1/Youth Care');
const furniture=require('./store1/routesStore1/furniture');
const notif=require('./notif/route');
const mongo=require('mongoose');
const auth=require('./user/authRoute');
const ink=require('./store2/routesStore2/ink');
const publicate=require('./store2/routesStore2/publicate');
const write=require('./store2/routesStore2/write');
 const clean=require('./store2/routesStore2/clean');







app.use(express.json());
app.use('/Elect',Elect);
app.use('/Wood',wood);
app.use('/Plumbing',Plumbing);
app.use('/furniture',furniture);
app.use('/YouthCare',YouthCare);
app.use('/notif',notif);
app.use('/auth',auth);
app.use('/clean',clean);
app.use('/write',write);
app.use('/publicate',publicate);
app.use('/ink',ink);





mongo.connect('mongodb+srv://Admincollege:qmHnMJj103IcUzEg@atlascluster.ytbxqwi.mongodb.net/CollegeStore?retryWrites=true&w=majority')
.then(()=>{console.log('connected mongoose successfull')},)
.catch((error)=>
    console.log(error)

)


app.listen(port,()=>console.log('server is running') );