class UserStorage {
    loginUser(id, password) {
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

    getRoles(user) {
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

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then((userWithRole) => {
        console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    })
    .catch((error) => {
        console.log(error);
    });
