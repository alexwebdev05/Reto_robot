import jwtStartegy from 'passport-jwt'
import ExtractJwt from 'passport-jwt'
import User from '../models/Usuario'
import URL_MDB from '../config/keys'

const opts = {}
opts.jwtStartegy = ExtractJwt.fromAuthHeaderAsBaererToken()
opts.secretOrKey = URL_MDB.secret

export default passport => {
    passport.User(
        new jwtStartegy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id).then(user => {
                if (user) return done(null, false)
            }).catch(err => {
                console.log(err)
            })
        })
    )
}