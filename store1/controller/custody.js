 const CustodyModel=require('../models/custody');



const createItem= async (req, res) => {
    try {
        const { name, amount } = req.body;
        const newItem = new CustodyModel({ name, amount });
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const UpdateItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { name, amount } = req.body;
        const updatedItem = await CustodyModel.findByIdAndUpdate(id, {name ,amount }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const GetAllData= async (req, res) => {
    try {
        const items =await CustodyModel .find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} ;

const OneItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { name , amount } = req.body;
        const updatedItem = await CustodyModel.findById(id);
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteItem= async (req, res) => {
     
    try {
        const { id } = req.params;
            const deletedItem = await CustodyModel.findByIdAndDelete(id);
            if (!deletedItem) {
              return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }


};



module.exports={createItem,UpdateItem,GetAllData,OneItem,deleteItem,deleteItem};