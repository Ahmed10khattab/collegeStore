const express =require('express');
const router=express.Router();
 const { createItem, UpdateItem, GetAllData, OneItem, deleteItem } = require('../controller/custody');
 
router.post('/CreatItem',createItem);
router.put('/UpdateItem/:id',UpdateItem);
//router.get('/AllData',GetAllData);
router.get('/OneItem/:id',OneItem);
router.delete('/DeleteItem/:id',deleteItem);
router.get('/AllData',(req,res)=>{
    res.send('ddddddddddddddddd')
});







module.exports=router;