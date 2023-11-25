import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.pre("save", () => {
    let user = this;
    const has = bcrypt.hashSync(user.password, 10);

});
userSchema.methods.comparePassword = (password) => {
    return this.password === password;
};

const UserModel = mongoose.model('User', userSchema);

export default UserModel;