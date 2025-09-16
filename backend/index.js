const express = require('express');
const mongoose = require('mongoose');
const servicesRoutes = require('./routes/services');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/monitoreo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/services', servicesRoutes);

app.listen(4000, () => {
  console.log("Servidor backend en http://localhost:4000");
});
