import express from "express";
import mongoose from "mongoose";
import CombineRouter from "./routers/index.js"
import connectToDb from "./db.js"



const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/test')

app.use('/api/v1', CombineRouter);
app.get('', (_, res) => {
    res.send({
        message: 'connection established !'
    })
});


app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
