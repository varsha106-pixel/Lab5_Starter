// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
  test('invalid phone number too short', () => {
    expect(isPhoneNumber('123-456')).toBe(false);
  });
});

// isEmail tests
describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('valid email with underscores', () => {
    expect(isEmail('my_email@domain.org')).toBe(true);
  });
  test('invalid email missing @', () => {
    expect(isEmail('testexample.com')).toBe(false);
  });
  test('invalid email missing domain', () => {
    expect(isEmail('test@')).toBe(false);
  });
});

// isStrongPassword tests
describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Hello123')).toBe(true);
  });
  test('valid password with underscore', () => {
    expect(isStrongPassword('a_bcde')).toBe(true);
  });
  test('invalid password starting with number', () => {
    expect(isStrongPassword('1abc')).toBe(false);
  });
  test('invalid password too short', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });
  test('invalid password too long', () => {
    expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
  });
});

// isDate tests
describe('isDate', () => {
  test('valid date', () => {
    expect(isDate('12/25/2023')).toBe(true);
  });
  test('valid date with single digit month and day', () => {
    expect(isDate('1/1/2023')).toBe(true);
  });
  test('invalid date missing year', () => {
    expect(isDate('12/25/23')).toBe(false);
  });
  test('invalid date with letters', () => {
    expect(isDate('ab/cd/efgh')).toBe(false);
  });
});

// isHexColor tests
describe('isHexColor', () => {
  test('valid 6 character hex with #', () => {
    expect(isHexColor('#ff5733')).toBe(true);
  });
  test('valid 3 character hex without #', () => {
    expect(isHexColor('fff')).toBe(true);
  });
  test('invalid hex with wrong characters', () => {
    expect(isHexColor('#gggggg')).toBe(false);
  });
  test('invalid hex wrong length', () => {
    expect(isHexColor('#12345')).toBe(false);
  });
});
