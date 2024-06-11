import chalk from "chalk"

const PromptSchemaMain = [
    {
        name: 'select',
        description: chalk.yellow.bold('Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD'),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true,
    },
]

export default PromptSchemaMain

//pattern é um regexr e serve para obrigar o usuário escolher apenas as opções que definimos na description 