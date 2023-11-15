const inputValidation = (value) => {
  const valueWithoutSpaces = value.trim();
  
  return (!valueWithoutSpaces || !isNaN(valueWithoutSpaces));
}

export default inputValidation;