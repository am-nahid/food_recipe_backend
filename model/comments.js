const Comments = require("../schemas/userComments");
const User = require("../schemas/userSchema");

const commentsPost = async (req, res) => {
  const  data  = req.body;
    const date = new Date();

    data.commentTimestamp = date
  try {
    // console.log(data);
    const user = await User.findOne({_id:data.user_id})
   data.name = user.email
//    console.log(data);
// if(previousRecipe){
    
// }
    const result = await Comments.create(data)
    res.send(result)
    // console.log(commentTime);

  } catch (err) {
    console.log(err);
    res.status(409).send("unable to save comments");
  }
};


const fetchAllComments= async (req,res)=>{
    
    try{
const result = await Comments.find()
res.send(result)
    }catch(err){
        console.log(err);
        res.status(409).send("unable to fetch comments");
    }
}

const fetchRecipeComment = async (req,res)=>{
  const recipeName  = req.params.recipeName
  // console.log(recipeName);
  try{
    const result = await Comments.find({recipeName:recipeName})
    // console.log(result);
    res.send(result)
        }catch(err){
            console.log(err); 
            res.status(409).send("unable to fetch comments");
        }
}

const deleteAllComments= async (req,res)=>{
    
  try{
const result = await Comments.deleteMany()
res.send(result)
  }catch(err){
      console.log(err);
      res.status(409).send("unable to delete comments");
  }
}

module.exports = { commentsPost, fetchAllComments, deleteAllComments, fetchRecipeComment };
