function removeWhitespace(argsArray) {
  return argsArray.join(" ").replace(/ {1,}/g, " ").trim();
}

function capitaliseInitial(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function removeSymbols(string) {
  const regex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  return string
    .split(" ")
    .map((word) => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        if (word[i].match(regex)) {
          continue;
        } else {
          newWord += word[i];
        }
      }
      return newWord;
    })
    .join(" ");
}

module.exports = { removeWhitespace, removeSymbols, capitaliseInitial };
