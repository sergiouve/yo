const isValidInput = (input) => {
    return true
}

const argumentsParser = () => {
    const needle = process.argv.filter(entry => {
        return entry.split('=')[0] === `--${flag}`;
    })[0];

    if (needle) {
        return needle.split('=')[1];
    }

    return {
        domain: null,
        command: null,
        flags: null,
    }
}

module.exports = argumentsParser;
