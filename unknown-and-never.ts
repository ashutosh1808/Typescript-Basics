//unknown checks the variable type, better than any
let userName: string;
let userInput: unknown;

userInput = 5;
userInput = 'max'

// userName=userInput  //string cannot be assigned to unknown

if (typeof userInput === "string") {
    userName = userInput
}


function generateError(message: string, code: number) : never {
    throw { message: message, code: code }
}

generateError("an error occured:(", 500);