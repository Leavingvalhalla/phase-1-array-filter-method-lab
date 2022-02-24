function findMatching(array, string) {
  const drivers = array.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
  return drivers;
}

function fuzzyMatch(array, string) {
  const drivers = array.filter((driver) => driver.startsWith(string));
  return drivers;
}

function matchName(array, string) {
  const match = array.filter((driver) => driver.name === string);
  return match;
}
