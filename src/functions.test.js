// Import functions to test
const { mergeStringsAlternately, generateRandomString, containsWord } = require('./functions');

describe('mergeStringsAlternately', () => {
    /**
     * Tests the mergeStringsAlternately function to ensure it correctly merges two strings
     * by alternating characters from each input string.
     */
    test('should merge two strings of equal length alternately', () => {
        // Both strings have the same length
        const result = mergeStringsAlternately('abc', '123');
        // Expected result should alternate characters: "a1b2c3"
        expect(result).toBe('a1b2c3');
    });

    test('should handle strings where one is longer than the other', () => {
        // First string is longer than the second
        const result = mergeStringsAlternately('abcd', '12');
        // Expected result is "a1b2cd" (remaining characters in the longer string are appended)
        expect(result).toBe('a1b2cd');
    });

    test('should throw a TypeError if either argument is not a string', () => {
        // Invalid input where the second argument is not a string
        expect(() => mergeStringsAlternately('abc', 123)).toThrow(TypeError);
    });
});

describe('generateRandomString', () => {
    /**
     * Tests the generateRandomString function to ensure it generates strings of the correct
     * length and type, depending on the specified character type (letters, numbers, alphanumeric).
     */
    //test 1 
    test('should generate a random alphanumeric string of specified length', () => {
        const length = 8;
        const result = generateRandomString(length, 'alphanumeric');
        // Ensure length is correct
        expect(result.length).toBe(length);
        // Ensure the string contains only alphanumeric characters
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });
    //test 2
    test('should generate a random string containing only letters when specified', () => {
        const result = generateRandomString(5, 'letters');
        // Check that the generated string only contains letters
        expect(result).toMatch(/^[A-Za-z]+$/);
    });

    test('should throw an error if the character type is invalid', () => {
        // An invalid type should throw an error
        expect(() => generateRandomString(5, 'symbols')).toThrow(Error);
    });
});

describe('containsWord', () => {
    /**
     * Tests the containsWord function to ensure it correctly identifies whether a given word
     * is present in a sentence, including checking for whole-word matches and case insensitivity.
     */
    test('should return true if the word is in the sentence', () => {
        const sentence = "The quick brown fox jumps over the lazy dog";
        const word = "fox";
        // Expect true because "fox" is present in the sentence
        expect(containsWord(sentence, word)).toBe(true);
    });

    test('should return false if the word is not in the sentence', () => {
        const sentence = "Hello world";
        const word = "planet";
        // Expect false because "planet" is not in the sentence
        expect(containsWord(sentence, word)).toBe(false);
    });

    test('should return true for case-insensitive matches', () => {
        const sentence = "JavaScript is awesome";
        const word = "javascript";
        // Expect true because the function is case-insensitive
        expect(containsWord(sentence, word)).toBe(true);
    });
});
