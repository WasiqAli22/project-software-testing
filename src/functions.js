// Merges two strings in alternating character order
function mergeStringsAlternately(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError("Both arguments must be strings.");
    }
    const maxLength = Math.max(str1.length, str2.length);
    let result = '';
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) result += str1[i];
        if (i < str2.length) result += str2[i];
    }
    return result;
}

// Generates a random string of specified length with letters, numbers, or both
function generateRandomString(length, type = 'alphanumeric') {
    const chars = {
        letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    };
    const charSet = chars[type];
    if (!charSet) throw new Error("Type must be 'letters', 'numbers', or 'alphanumeric'.");
    return Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
}


// Checks if a sentence contains a specific word
function containsWord(sentence, word) {
    if (typeof sentence !== 'string' || typeof word !== 'string') {
        throw new TypeError("Both arguments must be strings.");
    }
    return new RegExp(`\\b${word}\\b`, 'i').test(sentence);
}

module.exports = { mergeStringsAlternately, generateRandomString, containsWord };
