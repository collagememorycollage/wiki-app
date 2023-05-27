const ApiError = require('../error/ApiError.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'},
        )
    }

const {User, UserFavorite} = require('../models/models.js')
class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        const candidate = await User.findOne({where: {email}});

        if (candidate) {
            return next(ApiError.badRequest('Пользователь занят'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create( {email, password: hashPassword, role} );

        const userFavorite = await UserFavorite.create({userId: user.id});
        
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Некорректный email'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Некорректный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }
    
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token})
    }
}

module.exports = new UserController()