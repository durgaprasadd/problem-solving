const givenPasswords = [
    [3, 1, 9],
    [6, 8, 0],
    [1, 8, 0],
    [6, 9, 0],
    [1, 2, 9],
    [6, 2, 0],
    [7, 6, 2],
    [6, 8, 9],
    [7, 6, 2],
    [3, 1, 8],
    [3, 6, 8],
    [7, 1, 0],
    [7, 2, 0],
    [7, 1, 0],
    [6, 2, 9],
    [1, 6, 8],
    [1, 6, 0],
    [6, 8, 9],
    [7, 1, 6],
    [7, 3, 1],
    [7, 3, 6],
    [7, 2, 9],
    [3, 1, 6],
    [7, 2, 9],
    [7, 2, 9],
    [7, 1, 0],
    [7, 6, 9],
    [2, 9, 0],
    [7, 1, 9],
    [6, 8, 0],
    [3, 1, 8],
    [3, 8, 9],
    [1, 6, 2],
    [2, 8, 9],
    [1, 6, 2],
    [7, 1, 8],
    [7, 2, 9],
    [3, 1, 9],
    [7, 9, 0],
    [6, 8, 0],
    [8, 9, 0],
    [3, 6, 2],
    [3, 1, 9],
    [7, 6, 0],
    [3, 1, 6],
    [7, 2, 9],
    [3, 8, 0],
    [3, 1, 9],
    [7, 2, 8],
    [7, 1, 6]
]
const getIndexOfNumberInPasscode = function (prevPasscodeNumber, passcodeNumber, givenPasswords, cuurentIndex) {
    for (let index = cuurentIndex; index < givenPasswords.length; index++) {
        const cuurentPasscode = givenPasswords[index];
        if (cuurentPasscode.includes(prevPasscodeNumber) && cuurentPasscode.includes(passcodeNumber)) {
            if (cuurentPasscode.indexOf(prevPasscodeNumber) < cuurentPasscode.indexOf(passcodeNumber)) {
                return 1;
            }
            return 0;
        }
    }
    return 1;
}

const insertPasscodeNumber = function (prevPasscode, passcodeNumber, index) {
    const result = [];
    for (let i = 0; i < prevPasscode.length; i++) {
        if (i == index) result.push(passcodeNumber);
        result.push(prevPasscode[i]);
    }
    if(index == prevPasscode.length) result.push(passcodeNumber);
    return result;
}

const getPasscode = function (prevPasscode, password, givenPasswords, cuurentIndex) {
    let passcode = prevPasscode;
    for (let index = 0; index < password.length; index++) {
        let finalIndex = 0;
        if (passcode.includes(password[index])) continue;
        passcode.forEach((prevPasscodeNumber) => {
            finalIndex += getIndexOfNumberInPasscode(prevPasscodeNumber, password[index], givenPasswords, cuurentIndex);
        }
        )
        passcode = insertPasscodeNumber(passcode, password[index], finalIndex);
    }
    return passcode;
}


const derivePasscode = function (givenPasswords) {
    const initial = givenPasswords[0];
    let passcode = initial;
    for (let index = 1; index < givenPasswords.length;index++) {
        passcode = getPasscode(passcode, givenPasswords[index], givenPasswords, index);
    }
    return passcode;
}

console.log(derivePasscode(givenPasswords).join(""));