
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercasChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+={}:;,.<>?/"

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChar : "";
    allowedChars += includeUppercase ? uppercasChar : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars: "";

    if(length <= 0){
        return `(password legth must be at least 1)`
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character need to be selected)`
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
    
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowercase, 
                                        includeUppercase, 
                                            includeNumbers, 
                                                includeSymbols);

console.log(`Generated password: ${password}`);

