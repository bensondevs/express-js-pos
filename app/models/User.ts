const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class User extends Model {
    declare id: number;
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
}, { sequelize });

export default User;