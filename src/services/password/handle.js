async function permittedCharacters() {
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === 'true'){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTVUWXYZ")
    }

    if(process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(..."abcdefghijklmnopqrstvwxyz")
    }

    if(process.env.NUMBERS === 'true') {
        permitted.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTERS === 'true') {
        permitted.push(..."!@#$%¨&*()-+_")
    }

    return permitted;
}

async function handle(){
    let characters = []
    let password = ''

    const passwordLenght = process.env.PASSWORD_LENGTH

    characters = await permittedCharacters();

    

    for(let i = 0; i<passwordLenght; i++) {
        const index = Math.floor(Math.random() * characters.length)

        password += characters[index]
    }

    return password;
}

export default handle;