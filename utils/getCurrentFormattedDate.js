const getCurrentFormattedDate = () => {
    return (new Date()).toISOString().split('T')[0].replace(new RegExp('-', 'g'), '')
}

module.exports = getCurrentFormattedDate
