function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+ min) 
    
}

const userChoice = prompt('Pari o dispari?')
console.log(userChoice)

const userNum = prompt('Inserisci un numero da 1 a 5')
console.log('user num ' + userNum);

const botNum = generateRandomNumber(1, 5)
console.log('bot num ' + botNum);

const sumNum = parseInt(userNum) + botNum
console.log(sumNum);

console.log('sumNum % 2 = ' + sumNum % 2);

if (sumNum % 2 == 0) {
    console.log('userChoice.toLowerCase() = ' + userChoice.toLowerCase())

    if (userChoice.toLowerCase() === 'pari') {
        console.log('YEEEEEE');
    } else if (userChoice.toLowerCase() === 'dispari') {
        console.log('NOOOOOOOUUU CLEOURRRR');
    }
} else {
    console.log('userChoice.toLowerCase() = ' + userChoice.toLowerCase())

    if (userChoice.toLowerCase() === 'dispari') {
        console.log('YEEEEEE');
    } else if (userChoice.toLowerCase() === 'pari') {
        console.log('NOOOOOOOUUU CLEOURRRR');
    }
}