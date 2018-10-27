function telephoneCheck(str) {
  // Check if str is valid us telephone no.

  // check hypens are between digits
  if (/[-]/.test(str)) {

    if (/^-|-$/.test(str))
      return false // starts or ends w/hyphen
  }

  // check parens are paired; seperated by 3 digits
  if (/[)(]/.test(str)) { // check contains paren
    if (/[^(]\d{3}[)]/.test(str) ||
      /^\d{3}[)]/.test(str) ||
      /[(]\d{3}[^)]/.test(str) ||
      /[(]\d{3}$/.test(str)) {
      return false // if unpaired parens
    }
  }

  // Remove parens, hyphens, white space
  str = str.replace(/[-\(\)]|\s/g, "");

  // Contains non digits char(s)
  if (/\D/.test(str))
    return false;

  // check number length
  if (!(str.length >= 10 && str.length <= 11)) {
    return false; // if not 10 or 11 digits
  }

  // check area code
  if (str.length == 11 && str[0] != 1) {
    return false; // if not 10 or 11 digits
  }

  else
    return true; // if all filter conditions passed
}
console.log(telephoneCheck("-555-555-5555"));
console.log(telephoneCheck("-555-555-5555"));
console.log(telephoneCheck("55-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555)555555"));
console.log(telephoneCheck("15555555(555)"));
