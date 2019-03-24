// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.

// Otherwise return false.

function isPrefix(word, prefix) {
    return word.startsWith(prefix.substr(0, prefix.length - 1));
}

function isSuffix(word, suffix) {
    return word.endsWith(suffix.substr(1, suffix.length - 1));
}