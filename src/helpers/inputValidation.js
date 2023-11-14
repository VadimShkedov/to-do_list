const inputValidation = (value) => {
  const valueWithoutSpaces = value.trim();
  return (valueWithoutSpaces.length === 0 || !isNaN(+valueWithoutSpaces));
}

export default inputValidation;