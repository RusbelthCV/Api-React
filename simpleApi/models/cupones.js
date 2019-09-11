module.exports = (sequelize,DataTypes) => {
    const Cupon = sequelize.define('Cupon', {
        Nombre: DataTypes.STRING,
        Caducidad: DataTypes.STRING,
        Descripcion: DataTypes.STRING,
        Foto: DataTypes.STRING,
        Valor: DataTypes.INTEGER,
        enVenta: DataTypes.BOOLEAN,

    }, {tableName: 'cupones'});
    return Cupon;
};