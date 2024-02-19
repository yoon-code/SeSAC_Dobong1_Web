const PlayerModel = function (Sequelize, DataTypes) {
  // index에서 전달

  const Player = Sequelize.define(
    "Player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Player;
};

module.exports = PlayerModel;
