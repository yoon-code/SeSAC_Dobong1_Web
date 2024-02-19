"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

// sequelize class를 이용해서 sequelize 인스턴스 생성

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 2 모델 만들어진 후에 모델 불러오기 sequelize 인스턴스와 sequelize 모듈을 전달하는 중
// 불러오기
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// 3모델간 관계 설정
// hasOne, hasMany, belongsTo, belongsMany

// 3-1) 1:1 관계 설정 Player-Profile
// Player의 pk가 Profile의 fk가 됨
// Profile은 Player에 속해있다 belongs To

ProfileModel.belongsTo(PlayerModel, {
  // 두 모델을 연결하는 키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

// 3-2) 1:N 관계 팀:플레이어
// 한팀에 여러플레이어가 속해있음

TeamModel.hasMany(PlayerModel, {
  sourceKey: "team_id",
  foreignKey: "teamid",
  // 이름을 다르게 해도됨 자동으로은 기본키
});

PlayerModel.belongsTo(TeamModel, {
  targetKey: "team_id",
  foreignKey: "teamid",
});

// 3-3) N:M 관계 게임:팀
// 하나의 팀은 여러경기를 할수있고
// 하나의 경기에는 여러팀(2팀)이 참여

TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "Game_id",
});

// 4 db객체에 모델 추가
// db에 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;
// DB에 키를 추가

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
