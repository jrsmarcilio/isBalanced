#!/usr/bin/env node

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

function validateWord(word) {
  if (word.length > 255 || !word) return false;

  for (const char of word) {
    const charIncludes = ["[", "]", "(", ")", " "].indexOf(char);
    if (charIncludes === -1) return false;
  }

  return true;
}

function checkIsBalanced(word) {
  let nOpenBrackets = 0;
  let nOpenParentheses = 0;

  for (const char of word) {
    if (char === "[") nOpenBrackets++;
    else if (char === "(") nOpenParentheses++;
    else if (char === "]") {
      if (nOpenBrackets === 0) return false;
      nOpenBrackets--;
    } else if (char === ")") {
      if (nOpenParentheses === 0) return false;
      nOpenParentheses--;
    }
  }

  return nOpenBrackets === 0 && nOpenParentheses === 0;
}

async function main() {
  const n = await rl.question("Digite a quantidade de palavras desejadas: ");

  const arrWords = [];

  for (const _ of Array.from({ length: n })) {
    const word = await rl.question(`Digite a palavra desejada: `);
    arrWords.push(word);
  }

  for (const element of arrWords) {
    console.log(
      `${element} - ${!validateWord(element) ? "" : checkIsBalanced(element)}`
    );
  }
  
  closed();
}

function closed() {
  rl.close();
  
  process.exit(1);
}

main();
