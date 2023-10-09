const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');
const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);
mongoose.connect(MONGO_DATA_BASE,
  {
    useNewUrlParser: true,
    //useCreateIndex: true
    useUnifiedTopology: true
  }).then(con => {
    //console.log(con.connection);
    console.log('MongoDB database connection established successfully');
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});