const EOL = '\n\n'

const printHelp = (message = '', error = null) => {
    let help = 'Usage: '

    if (error) {
        help = `An error occured: ${error.message}${EOL}` + help
    }

    console.log(help)
}

module.exports = printHelp
