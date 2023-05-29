const sequelize = require('../db.js')

const {DataTypes, Model} = require('sequelize')

const User = sequelize.define('user', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING,  unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Article = sequelize.define('article', {
    id_article: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_article: {type: DataTypes.STRING, unique: true, allowNull: false},
    text_article: {type: DataTypes.STRING(1000)},
    readable_count: {type: DataTypes.INTEGER, defaultValue: 0},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}
})

const UserFavorite = sequelize.define('user_favorites', {
    id_favorite: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const NowReading = sequelize.define('now_reading', {
    id_reading: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Notes = sequelize.define('notes', {
    id_note: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title_note: {type: DataTypes.STRING},
    text_note: {type: DataTypes.STRING(1000)},
    date_note: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
})

User.hasMany(UserFavorite, {
    foreignKey: 'id_user'
});

User.hasMany(NowReading, {
    foreignKey: 'id_user',
});

User.hasMany(Notes, {
    foreignKey: 'id_user'    
});

Article.hasMany(UserFavorite, {
    foreignKey: 'id_article'
});

Article.hasMany(NowReading, {
    foreignKey: 'id_article'
});

module.exports = {
    User,
    Article, 
    UserFavorite, 
    NowReading, 
    Notes
}


