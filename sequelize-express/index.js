const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('NodeTest','root','root',{dialect:'mysql'});
const TestTable = sequelize.define('test_table', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
},{
  freezeTableName: true,
  timestamps: false
});

app.get('/', function (req, res) {
  TestTable.findAll().then(results => {
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});