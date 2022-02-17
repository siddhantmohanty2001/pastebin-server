const express=require('express');
const Snippet = require('../Schema/Snippet')
const Log=require('../Schema/Log')
const router= express.Router();
router.get('/get',async (req,res)=>{
    const result=await Snippet.find();
    // let doc = await Document.find()
  var d = new Date()
  d.setDate(d.getDate() - 1)
  //console.log(doc[0]);
  //console.log(d<doc[0].date);
  for(let i=0;i<result.length;i++)
  {
    
    if(d>result[i].date)
    {
      //console.log(i);
      Snippet.deleteOne({_id:result[i]._id})
      .then(result=>{
        res.status(200).json({
          msg:"deleted",
          result:result
        })
      })
      .catch(err=>{
        res.status(405).json({
          error:err
        })
      })
        
      
    }
  }
    res.send(result);
})

router.post('/post',async (req,res)=>{
    console.log(req.body)
    const newSnippet=new Snippet(req.body);
    const result=await newSnippet.save();
    res.send(result);
})

router.delete('/delete',async (req,res)=>{
 console.log(req.body);
 const {_id}=req.body;
 const result=await Snippet.deleteMany({_id:_id})
 res.send(result);
})

router.put('/put',async (req,res)=>{
    console.log(req.body);
    const {_id,expiryDate}=req.body;
    const result=await Snippet.updateOne({_id:_id},{$set:{expiryDate:expiryDate}});
    res.send(result);
})

module.exports = router;