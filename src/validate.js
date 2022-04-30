function validateEmail(value) {
  
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validRegex.test(value);
}


function validateNo(value) {
  const validRegex =
  /^\d+$/;

  return validRegex.test(value);
}

function validateGitHub(value) {
  const validRegex =
    /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

  return validRegex.test(value);
}

module.exports = {
  validateEmail, validateNo, validateGitHub
};


