const mongoose = require('mongoose');

let HodorSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        hodor: Number,
        // author: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'AnotherHodor'
        // },
    }
);

HodorSchema.methods.hodor = function() {
    this.hodor++;
    return this.save()
};
module.exports = mongoose.model('Hodor', HodorSchema);