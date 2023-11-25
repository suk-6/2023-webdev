import UserModel from '../models/user.model.js';

export const createUser = async (input) => {
    try {
        return (await UserModel.create(input)).toJSON();
    } catch (error) {
        throw new Error(error);
    }
};

export const validatePassword = ({ email, password }) => {
    const user = UserModel.findOne({ email });
    if (!user) return false;

    const isValid = user.comparePassword(password);
};