/*
  WRITE YOUR SOLUTION HERE
*/

function urlify(title) {
  // Sanitize the title
  if (title.length > 0) {
    const punctuation = title.replace(/[!,._]/gi, "");
    return punctuation.replace(/\s+/gi, "-").toLowerCase().trim();
  }
  return "unnamed-title";
}

console.log(urlify("My first blog!!"));
