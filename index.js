// Code your solution here
function findMatching (nameList, targetName) {
    return nameList.filter(nom => equalName(nom, targetName))
}

function equalName(a,b) {
    console.log(a.toLowerCase() === b.toLowerCase())
    return a.toLowerCase() === b.toLowerCase()
}

function fuzzyMatch(nameList, targetStart) {
    return nameList.filter(nom => nom.startsWith(targetStart))
}

function matchName(nameList, targetName) {
    return nameList.filter(driver => driver.name === targetName)
}