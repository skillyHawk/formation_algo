const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.userRegister = (req, res) => {
    let newUser = new User(req.body);
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser['password'], salt, function(err, hash) {
            newUser['password'] = hash;
            newUser.save((error, user) => {
                console.log(newUser);
                if (error) {
                    res.status(500);
                    console.log(error);
                    res.json({
                        message: "Erreur serveur."
                    });
                } else {
                    res.status(201);
                    res.json({
                        message: `Utilisateur crée : ${user.email} et mot de passe ${user.password} et hash :` + newUser['password']
                    });
                }
            });
        });
    });
}

exports.userLogin = (req, res) => {
    // Rechercher l'utilisateur
    User.findOne({
        email: req.body.email
    }, (error, user) => {
        // Si l'utilisateur n'est pas trouvé
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        }
        // Si l'utilisateur est trouvé
        else {
            // Si l'email et le mot de passe correspondent
            if (user != null) {
                bcrypt.compare(req.body.password, user.password, function(err, resultBcrypt) {
                    if (user.email === req.body.email && resultBcrypt) {
                        jwt.sign({
                            user : {
                                id: user._id,
                                email: user.email,
                                typeCompte: user.typeCompte
                            }
                        }, process.env.JWT_KEY, {
                            expiresIn: "30 days"
                        }, (error, token) => {
                            console.log(error);
                            if (error) {
                                res.status(500);
                                console.log(error);
                                res.json({
                                    message: "Erreur serveur."
                                });
                            } else {
                                res.status(200);
                                res.json({
                                    token
                                });
                            }
                        })
                    } else {
                        res.status(403);
                        console.log(error);
                        res.json({
                            message: "Authentification incorrect."
                        });
                    }
                });
            }
            // Si l'email et le mot de passe ne correspondent pas
            else {
                res.status(403);
                console.log(error);
                res.json({
                    message: "Authentification incorrect l'email et le mot de passe ne correspondent pas."
                });
            }
        }
    });
}