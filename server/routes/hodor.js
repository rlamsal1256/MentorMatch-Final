const hodorController = require('../controllers/hodor.ctrl');

module.exports = (router) => {

    /**
     * hodor
     */
    router
        .route('/hodor')
        .get(hodorController.hodor);
};
