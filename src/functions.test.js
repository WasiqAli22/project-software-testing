// Import functions to be tested from the functions module
const { mergeStringsAlternately, generateRandomString, containsWord } = require('./functions');

// Test suite for mergeStringsAlternately function
describe('mergeStringsAlternately', () => {
    // Test case: merging two strings of equal length
    test('should merge two strings of equal length alternately', () => {
        const result = mergeStringsAlternately('abc', '123');
        expect(result).toBe('a1b2c3');
    });

    // Test case: handling strings where one is longer than the other
    test('should handle strings where one is longer than the other', () => {
        const result = mergeStringsAlternately('abcd', '12');
        expect(result).toBe('a1b2cd');
    });

    // Test case: ensuring function throws an error for invalid input types
    test('should throw a TypeError if either argument is not a string', () => {
        expect(() => mergeStringsAlternately('abc', 123)).toThrow(TypeError);
    });
});

// Test suite for generateRandomString function
describe('generateRandomString', () => {
    // Test case: generating an alphanumeric string of specified length
    test('should generate a random alphanumeric string of specified length', () => {
        const length = 8;
        const result = generateRandomString(length, 'alphanumeric');
        expect(result.length).toBe(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case: ensuring generated string contains only letters
    test('should generate a random string containing only letters when specified', () => {
        const result = generateRandomString(5, 'letters');
        expect(result).toMatch(/^[A-Za-z]+$/);
    });

    // Test case: checking error handling for invalid character type
    test('should throw an error if the character type is invalid', () => {
        expect(() => generateRandomString(5, 'symbols')).toThrow(Error);
    });
});

// Test suite for containsWord function
describe('containsWord', () => {
    // Test case: checking if a word exists in a sentence
    test('should return true if the word is in the sentence', () => {
        const sentence = "The quick brown fox jumps over the lazy dog";
        const word = "fox";
        expect(containsWord(sentence, word)).toBe(true);
    });

    // Test case: checking if a word is absent in a sentence
    test('should return false if the word is not in the sentence', () => {
        const sentence = "Hello world";
        const word = "planet";
        expect(containsWord(sentence, word)).toBe(false);
    });

    // Test case: ensuring function is case-insensitive
    test('should return true for case-insensitive matches', () => {
        const sentence = "JavaScript is awesome";
        const word = "javascript";
        expect(containsWord(sentence, word)).toBe(true);
    });
});

// Integration tests to verify multiple functions working together
//Testing our function's test work 

describe('Integration Tests', () => {
    // Test case: merging two randomly generated strings and checking their presence in result
    test('should merge two randomly generated strings and check if result contains parts of both', () => {
        const str1 = generateRandomString(5, 'letters');
        const str2 = generateRandomString(5, 'letters');
        const merged = mergeStringsAlternately(str1, str2);

        // Ensure all characters from the first string are present in the merged result
        for (let char of str1) {
            expect(merged).toContain(char);
        }
                // Ensure all characters from the second string are present in the merged result

        for (let char of str2) {
            expect(merged).toContain(char);
        }
    });

    // Test case: checking if a generated sentence contains a specific word
    test('should generate a string and verify it contains a specific word', () => {
        const word = 'test';
        const sentence = `This is a ${word} case.`;
        expect(containsWord(sentence, word)).toBe(true);
    });

    // Test case: merging two strings and verifying word presence
    test('should merge two strings and verify word presence', () => {
        const str1 = 'hello';
        const str2 = 'world';
        const merged = mergeStringsAlternately(str1, str2);

        // Check that each character from the original words is present
        for (let char of str1) {
            expect(merged).toContain(char);
        }
        for (let char of str2) {
            expect(merged).toContain(char);
        }
    });
});
