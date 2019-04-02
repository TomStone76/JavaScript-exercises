// Write three separate functions, one to retrieve each element
// in the semantic versioning specification.

function retrieveMajor(semver) {
    return semver[0];
}

function retrieveMinor(semver) {
    return semver.length > 5
    ? semver.substr(2, 2) : semver[2];
}

function retrievePatch(semver) {
    return semver.lengt > 5
    ? semver.substr(5) : semver[4];
}