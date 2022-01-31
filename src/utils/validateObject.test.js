import React from 'react';
import validateObject from './validateObject';

it('should return valid object', () => {
  const object1 = {
    a: 1,
    b: 2,
  };
  const object2 = {
    a: 1,
    b: 2,
  };
  const validation = validateObject(object1, object2);
  expect(validation).toBe(object2);
});

it('should throw error because of missing property', () => {
  const object1 = {
    a: 1,
    b: 2,
  };
  const object2 = {
    a: 1,
  };
  const validation = function () {
    validateObject(object1, object2);
  };
  expect(validation).toThrow(Error);
});

it('should return a valid object after comparing nested objects', () => {
  const object1 = {
    a: 1,
    b: {
      a: 1,
      b: {
        a: {
          a: 1,
          b: 2,
        },
      },
    },
  };
  const object2 = {
    a: 1,
    b: {
      a: 1,
      b: {
        a: {
          a: 1,
          b: 2,
        },
      },
    },
  };
  const validation = validateObject(object1, object2);
  expect(validation).toBe(object2);
});

it('should return a valid object after comparing objects with arrays', () => {
  const object1 = {
    a: 1,
    b: {
      a: 1,
      b: {
        a: [],
      },
    },
  };
  const object2 = {
    a: 1,
    b: {
      a: 1,
      b: {
        a: [],
      },
    },
  };
  const validation = validateObject(object1, object2);
  expect(validation).toBe(object2);
});

it('should throw error because of  property not being an array', () => {
  const object1 = {
    a: [],
  };
  const object2 = {
    a: 1,
  };
  const validation = function () {
    validateObject(object1, object2);
  };
  expect(validation).toThrow(Error);
});

it('should throw error because of property discrapancy', () => {
  const object1 = {
    a: [],
  };
  const object2 = [];
  const validation = function () {
    validateObject(object1, object2);
  };
  expect(validation).toThrow(Error);
});

it('should throw error because of receiving null', () => {
  const object1 = {
    a: [],
  };
  const object2 = null;
  const validation = function () {
    validateObject(object1, object2);
  };
  expect(validation).toThrow(Error);
});
