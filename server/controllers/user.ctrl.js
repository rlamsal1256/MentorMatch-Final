const User = require('../models/User');

module.exports  = {
    getProfile: (req, res, next) => {
        return res.send({hodor: "hodor"});
        // return res.join({hodor: "hodor"})
        // Hodor.findById(req.body.hodor).then(hodor => {
        //     return hodor.hodor().then(() => {
        //         return res.join({ hodor: "hodor"})
        //     })
        // }).catch(next)
    },

    addUser: (req, res, next) => {
        new User(req.body).save((err, newUser) => {
            if (err)
                res.send(err);
            else if (!newUser)
                res.send(400);
            else
                res.send(newUser);
            next()
        })
    },
};