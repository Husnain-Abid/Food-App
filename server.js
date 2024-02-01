const express = require("express")
const connectDB = require("./config/DB")
const cors = require("cors")
const app = express()
const PORT = 8080

connectDB()

//middlewares
app.use(cors())
app.use(express.json())

app.use("/api/v1/auth", require("./routes/authRoutes"))
app.use("/api/v1/user", require("./routes/userRoutes"))
app.use("/api/v1/resturent", require("./routes/resturentRoutes"))
app.use("/api/v1/category", require("./routes/categoryRoutes"))
app.use("/api/v1/food", require("./routes/foodRoutes"))
app.use("/api/v1/order", require("./routes/orderRoutes"))

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`);
})
