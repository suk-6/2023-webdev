function hello(name: string) {
	return `Hello ${name}!`;
}

console.log(hello("TypeScript"));

const hello2 = (name = "world") => `Hello ${name}!`;

console.log(hello2());

const hello3 = (name: string, age?: number) => {
	if (age !== undefined) {
		return `Hello ${name}! You are ${age} years old!`;
	} else {
		return `Hello ${name}!`;
	}
};

const add = (nums: number[]) => {
	return nums.reduce((a, b) => a + b, 0);
};

console.log(add([1, 2, 3, 4, 5]));
