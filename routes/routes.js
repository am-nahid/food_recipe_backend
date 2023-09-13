const auth = require('../middleware/auth')
const oneForAll = require('../mockData/oneForAll')
const { commentsPost, fetchAllComments, fetchRecipeComment , deleteAllComments} = require('../model/comments')
const { saveRecipe, fetchIndividualRecipe, deleteAllSaves } = require('../model/saveRecipe')
const { register, login } = require('../model/users')

const route = require('express').Router()

// User routes
route.post('/signup',register)
route.post('/login', login)


// Comment routes
route.post('/post-comments',commentsPost)
route.get('/all-comments',fetchAllComments)
route.get('/recipe-comment/:recipeName',fetchRecipeComment)
// route.get('/delete-comments',deleteAllComments)


// Recipe routes
route.get('/delete-saves', deleteAllSaves);
route.post('/save-recipe', auth, saveRecipe);
route.get('/fetch-recipe/:user_id', fetchIndividualRecipe);

route.get('/alldata',(req,res)=>{
    res.send(oneForAll)
})

module.exports = route