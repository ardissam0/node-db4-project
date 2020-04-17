const express = require('express');

const Recipes = require('../recipes/recipe-model');

const router = express.Router();

router.get("/",(req,res)=>{
    Recipes.getRecipes().then(recipes=>{
        res.status(200).json(recipes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to get recipes' });
    })
})
router.get("/:id/recipes",(req,res)=>{
    Recipes.getRecipesbyId(req.params.id).then(recipes=>{
        res.status(200).json(recipes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to get Shopping list' });
    })
})
router.get("/:id/shoppingList",(req,res)=>{
    Recipes.getShoppingList(req.params.id).then(recipes=>{
        res.status(200).json(recipes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to get Shopping list' });
    })
})
router.get("/:id/steps",(req,res)=>{
    Recipes.getInstructions(req.params.id).then(steps=>{
        res.status(200).json(steps)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to get Instructions' });
    })
})

module.exports = router; 