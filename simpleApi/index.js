const express = require('express');
const cuponesRouter = require('./routes/cupones-controller');
const path = require('path');
const app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/cupones',cuponesRouter);

// app.use((req,res) => {
//     res.redirect("/api/cupones")
// });

app.listen(app.get('port'),() => {
    console.log("Server on port "+app.get('port'));
});