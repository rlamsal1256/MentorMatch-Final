const Hodor = require('./../models/Hodor');

module.exports  = {
    hodor: (req, res, next) => {
        Hodor.findById(req.body.hodor).then(hodor => {
            return hodor.hodor().then(() => {
                return res.join({ hodor: "hodor"})
            })
        }).catch(next)
    },
};