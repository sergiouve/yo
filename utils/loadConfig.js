const homedir = require('os').homedir();

const loadConfig = () => {
    try {
        return require(`${homedir}/.yo/config.json`)
    } catch (error) {
        return null
    }
}

module.exports = loadConfig
