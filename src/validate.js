function validateEmail(value) {
  
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validRegex.test(value);
}


function validateId(value) {
  const validRegex =
  /^\d+$/;

  return validRegex.test(value);
}

module.exports = {
  validateEmail, validateId
};
