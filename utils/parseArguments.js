const isValidInput = (input) => {
    if (! input.length) {
        return false
    }

    return true
}

const parseArguments = () => {
    const arguments = process.argv.slice(2)

    if (! isValidInput(arguments)) {
        throw new Error(`Invalid input 'yo ${arguments.join()}'`)
    }

    return {
        domain: arguments[0],
        command: arguments[1],
        flags: arguments.slice(2),
    }
}

module.exports = parseArguments
