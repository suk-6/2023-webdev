class UserStorage {
    loginUser = async (id, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'suk' && password === 'suk') ||
                    (id === 'rahosung' && password === 'mahosung')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found or password is wrong'));
                }
            }, 2000);
        });
    }

    getRoles = async (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'suk') {
                    resolve({ name: 'suk', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

const login = async (id, password) => {
    try {
        const user = await userStorage.loginUser(id, password);
        const userWithRole = await userStorage.getRoles(user);
        console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    } catch (error) {
        console.log(error);
    }
}

login(id, password);
