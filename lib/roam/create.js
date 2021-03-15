const homedir = require('os').homedir();
const { readFileSync, writeFileSync } = require('fs')
const getCurrentFormattedDate = require('../../utils/getCurrentFormattedDate')

const FILE_TYPES = ['article', 'journal', 'person']

const create = (config, flags) => {
    const fileType = flags[0]
    const roamPath = config.roam.path.replace('~', homedir)

    if (! FILE_TYPES.includes(fileType)) {
        throw new Error(`invalid file type "${fileType}"`)
    }

    createNewRoamFileOfType(roamPath, fileType)
}

const createNewRoamFileOfType = (roamPath, type) => {
    const today = getCurrentFormattedDate()
    const filename = `${type}-${today}.org`
    const template = readFileSync(`${__dirname}/templates/${type}`, 'utf8').replace('[[NOW]]', today)

    writeFileSync(`${roamPath}/${filename}`, template)
}

module.exports = create
