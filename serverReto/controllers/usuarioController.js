import express from 'express'
const router = express.Router();
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import secret from '../config/keys.js'
import User from '../models/Usuario.js'

// Registro
router.post('/registro', (req, res) => {
    let {
        email,
        usuario,
        contraseña,
        confirm_contraseña
    } = req.body
    if ( contraseña !== confirm_contraseña ) {
        return res.status(400).json({
            msg: 'Las contraseñas no coinciden.'
        })
    }

    // comprueba si el usuario existe
    return User.findOne({
        usuario: usuario
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: 'El usuario esta registrado.'
            })
        }

        let newUser = new User({
            email,
            usuario,
            contraseña
        })

        // Encripta la contraseña
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.contraseña, salt, (err, hash) => { // Si te fijas en esta linea aplica la sal
                if (err) throw err
                newUser.contraseña = hash
                newUser.save().then(user => {
                    return res.status(201).json({
                        success: true,
                        msg: 'Q pro, te has registrado!!!'
                    })
                })
            })
        })
    })
})


// Login
router.post('/login', (req, res) => {
    User.findOne({
        usuario: req.body.usuario
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: 'Datos incorrectos',
                success: false
            })
        }

        // Encripta la contraseña y la compara
        bcrypt.compare(req.body.contraseña, user.contraseña).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    usuario: user.usuario,
                    contraseña: user.contraseña
                }

                // Asigna un token
                jwt.sign(payload, secret, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `${token}`,
                        msg: 'Q pro, has iniciado sesión!!!'
                    })
                })
            } else {
                return res.status(404).json({
                    msg: 'Datos incorrectos',
                    success: false
                })
            }
        })
    })
})

// Profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json(req.user({
        user: req.user
    }))
})
export default router