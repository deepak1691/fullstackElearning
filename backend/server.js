require('dotenv').config();

const express=require("express");
const app=express();
const route=require("./router/auth.router");
const adminRoute=require("./router/admin.router");
const connectDB=require("./utils/db");
const {errorMiddleware}=require('./meddileware/error');
const cors=require('cors');
const port =process.env.PORT|| 8080;

connectDB();

const corsOptions={
    origin:"https://e-learning-frontend-1lsu.onrender.com",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use("/api",route);
app.use("/api/admin",adminRoute);
app.use(errorMiddleware);
 
    app.listen(port,()=>{
      
        console.log(`server is listing on ${port}`);  
});
