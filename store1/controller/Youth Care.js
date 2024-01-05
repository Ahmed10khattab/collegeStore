const YouthCare = require("../models/Youth Care");



const createItem= async (req, res) => {
    try {
        const { nameItem, countItem } = req.body;
        const newItem = new YouthCare({ nameItem, countItem });
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const UpdateItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { nameItem, countItem } = req.body;
        const updatedItem = await YouthCare.findByIdAndUpdate(id, {nameItem ,countItem }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const GetAllData= async (req, res) => {
    try {
        const items =await YouthCare .find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} ;

const OneItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { nameItem , countItem } = req.body;
        const updatedItem = await YouthCare.findById(id);
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



module.exports={createItem,UpdateItem,GetAllData,OneItem};