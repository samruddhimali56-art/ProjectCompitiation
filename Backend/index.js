const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
    
  "mongodb+srv://samruddhimali56_db_user:0fAb2piiBYZC1w2A@cluster0.3skylqk.mongodb.net/heritage?retryWrites=true&w=majority&appName=Cluster0"
)

    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((err) => {
    console.log("MongoDB Connection Error:");
    console.log(err);
    console.log(err.message);
    console.log(err.stack);
});

// app.use("/forts", require("./routes/fortRoutes"));


// Start the server
app.get('/test', (req, res) => {
    res.send('Server is running');
});

app.listen(5000, () => {
    console.log('Server started');
})