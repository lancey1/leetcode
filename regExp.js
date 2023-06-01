var check = function (str) {
  var regExp = /^[a-z]+$/
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
};
