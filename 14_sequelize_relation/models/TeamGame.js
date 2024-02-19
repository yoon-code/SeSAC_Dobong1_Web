const TeamGameModel = function (Sequelize, DataTypes) {
  const TeamGame = Sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return TeamGame;
};

module.exports = TeamGameModel;
