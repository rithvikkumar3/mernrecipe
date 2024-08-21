import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js'
import cors from 'cors'


const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials:true
}))

app.use('/api', userRouter)

app.use('/api', recipeRouter)

mongoose
  .connect(
    "mongodb+srv://rithvikkumar30:tknplWLp0EYp8Flo@cluster0.4zmbk.mongodb.net/",
    {
      dbName: "mern_recipe",
    }
  )
  .then(() => console.log("MongoDb is live")).catch((err) => console.log(err.message));

const port = 3000;

app.listen(port, () => console.log(`Server is live on ${port}`));





// username = rithvikkumar30
// password = tknplWLp0EYp8Flo

// mongodb+srv://rithvikkumar30:<password>@cluster0.4zmbk.mongodb.net/
