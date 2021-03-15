const homedir = require('os').homedir();

const loadConfig = () => {
    try {
        return require(`${homedir}/.yo/config.json`)
    } catch (error) {
        return require(`${__dirname}/../config.json`)
    }
}

module.exports = loadConfig
