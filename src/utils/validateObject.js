/* eslint-disable no-restricted-syntax */
const validateObject = function (standardOb, valueObj) {
  for (const [key, value] of Object.entries(standardOb)) {
    if (!Object.prototype.hasOwnProperty.call(valueObj, key)) {
      throw Error(`"${key}" property does not exist in value object`);
    }
    if (Array.isArray(value)) {
      if (!Array.isArray(valueObj[key])) {
        throw Error(
          'If it is an array in standard it should be an array in value object'
        );
      }
    } else if (typeof value === 'object') {
      validateObject(value, valueObj[key]);
    }
  }
  return valueObj;
};

export default validateObject;
