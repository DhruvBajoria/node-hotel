const express = require('express');
const router = express.Router();
const MenuItem = require('../Models/MenuItem');

router.post('/',async(req,res)=>{
      try{
      const data = req.body;
      
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(201).json(response);
      }catch(err){
            console.log(error);
            res.status(500).json({error:"Internal Server Error"});
      }
});

router.get('/',async(req,res)=>{
      try{
            const data = await MenuItem.find();
            console.log('Data fetched');
            res.status(200).json(data);
      }catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
      }
})

router.get('/:taste',async(req,res)=>{
      try{
            const taste = req.params.taste;
            if(taste=='Sour'|| taste=='Sweet' || taste =='Spicy'){
                  const response = await MenuItem.find({taste:taste});
                  console.log('Fetched successfully');
                  res.status(200).json(response);
            }else{
                  res.status(404).json({error:"Inavlid Taste"});
            }

      }catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
      }
})

router.put('/:id', async(req,res)=>{
      try{
            const itemId = req.params.id;
            const updateItem = req.body;
            const response = await MenuItem.findByIdAndUpdate(itemId,updateItem,{
                  new:true,
                  runValidators:true
            });
            if(!response)
            return res.status(404).json({error:"Item not found"});

            console.log("Updated succesfully");
            res.status(200).json(response);

      }catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"}); 
      }
});

router.delete('/:id', async(req,res)=>{
      try{
      const itemId = req.params.id;

      const response = await MenuItem.findByIdAndDelete(itemId);
      if(!response)
      return res.status(404).json({error:"Item not found"});
      
      console.log('Deleted successfully');
      res.status(200).json({message:"Deleted succesfully"});
      }catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"}); 
      }
})

module.exports = router;