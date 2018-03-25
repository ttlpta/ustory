export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const validateLengthText = (text, maxLength = 10, minLength = 6) => {
  const re = new RegExp('^[a-zA-Z0-9]{'+minLength+','+maxLength+'}$');
  
  return re.test(text)
}