//Tagged template literals

function introduceMe(array, ...args) {
    console.log({ array, args});
}

const name = "Manuel"
const age = 20
introduceMe`Hi my name is ${name} and I'm ${age}`;
