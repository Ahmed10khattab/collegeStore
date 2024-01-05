const express =require('express');
const router=express.Router();
 const { createItem, UpdateItem, GetAllData, OneItem } = require('../controller/Youth Care');
 
router.post('/CreatItem',createItem);
router.put('/UpdateItem/:id',UpdateItem);
router.get('/AllData',GetAllData);
router.get('/OneItem/:id',OneItem)



module.exports=router;
