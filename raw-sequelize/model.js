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

TestTable.findAll().then(data => {
  console.log(data);
});