const word = prompt('Inserire una parola');

// A N N A
// 0 1 2 3 length 4

// function isPalindromo(word) {

//     for (let i = 0; i < word.length; i++) {
//         const char1 = word.charAt(i);
//         const char2 = word.charAt(word.length - 1 - i)
//         const charCalc = char1 !== char2

//         if (charCalc) {
//             return false
//         }
//     }

//     return true
// }

function isPalindromo(word) {
    let firstChar = 0;
    let lastChar = word.length - 1;
    let charPali = true;

    while (firstChar < lastChar && charPali) {
        const char1 = word.charAt(firstChar);
        const char2 = word.charAt(lastChar);
        const charCalc = char1 !== char2;

        if (charCalc) {
            charPali = false;
        }

        firstChar++
        lastChar--
    }

    return charPali;
}

console.log(isPalindromo(word));
