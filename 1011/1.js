const delay = (sec) => new Promise((resolve, reject) => setTimeout(() => {
    resolve(new Date().toISOString());
}, sec * 1000))


const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('암닭');
    }, 1000)
});


const getEgg = (hen) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(`${hen} => 계란`);
        } else {
            reject(new Error(`${hen}이 계란을 안 낳았어`));
        }
    }, 1000)
});


const cook = (food) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (food === '소금빵') {
            resolve(`${food} => 토스트`);
        } else {
            resolve(`${food} => 후라이`);
        }
    }, 1000)
});


// getHen()
//     .then(getEgg)
//     .catch(error => {
//         console.log(error);
//         return '소금빵';
//     })
//     .then(cook)
//     .then(console.log);

const myFunc = () => {
    return 'func';
}

const myAsync = async () => {
    return 'func';
}

// console.log(myFunc());
// console.log(myAsync());

// myAsync().then(console.log);

const delayP = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000)
    })
}

const delayP2 = async (sec) => {
    await delayP(sec)

    return 'async';
}

// console.log(delayP2(1));
delayP2(3).then(console.log);