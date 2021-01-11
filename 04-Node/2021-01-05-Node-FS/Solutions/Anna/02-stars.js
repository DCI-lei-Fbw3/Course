function printHeader(num, headerText) {
  const stars = "*".repeat(num ? num : 10);
  const text = headerText ? headerText : "hi";

  console.log(`
${stars}
${text}
${stars}`);
}

module.exports = printHeader;
