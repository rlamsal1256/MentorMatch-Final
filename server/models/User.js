const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        username: String,
        skills: [
            {
                name: String,
                level: Number
            }
        ],
        interests: [
            String
        ]
    }
);


UserSchema.methods.setUsername = function(username) {
    this.username = username;
    return this.save()
};
UserSchema.methods.addSkills = function(skill) {
    this.skills.push(skill);
    return this.save()
};
UserSchema.methods.addInterests = function(interest) {
    this.interests.push(interest);
    return this.save()
};
module.exports = mongoose.model('User', UserSchema);