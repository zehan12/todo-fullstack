require("dotenv").config()
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const createError = require("http-errors");
const { connect, set } = require("mongoose");

set('strictQuery', true)
connect(process.env.MONGO_URI,(err)=>{
    console.log(`conntect to Database: ${ err ? "false due to " + err : "true" }`)
})
 
const app = express();

const PORT = 8018;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// * Routes * // 
app.use('/', require("./routes/index") );
app.use("/api/todo", require("./routes/todo") );
app.use("/api/users", require("./routes/user") );


// * Handle Errors * //
app.use(function (req, res, next) {
    next(createError(404));
});


app.listen(PORT, (error) => {
    console.log(error
        ? `Error occurred, server can't start ${error}`
        : `Server is Successfully Running,  and App is listening on port ${PORT}`
    )
})
