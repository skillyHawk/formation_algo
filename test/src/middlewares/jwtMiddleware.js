const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const jwtKey = process.env.JWT_KEY;

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token !== undefined) {
        jwt.verify(token, jwtKey, (error, payload) => {
            console.log(payload)
            if (error) {
                res.status(403);
                res.json({
                    message: token + 'Accès interdit : token invalide.'
                });
            } else {
                next();
            }
        })
    } else {
        res.status(403);
        res.json({
            message: token + 'Accès interdit : token manquant.'
        });
    }
}

exports.verifyAdmin = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token !== undefined) {
        jwt.verify(token, jwtKey, (error, payload) => {
            User.findOne({
                email: payload['user'].email
                }, (errorUser, user) => {
                if (errorUser) {
                    res.status(500);
                    console.log(errorUser);
                    res.json({
                        message: "Erreur serveur l'utilisateur n'est plus valide."
                    });
                }
                else{
                    if (payload.user.typeCompte == 1) {
                        next();
                    } else {
                        res.json({
                            message: 'Accès interdit : droits insufisants .'
                        });
                    }
                }
            });
        })
    }
}