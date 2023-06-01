const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetCap;
// Write your for loop below
for (let i = 0; i < alphabet.length; i += 5) {
  alphabetCap = alphabet[i];
  alphabetCap = alphabetCap.toUpperCase();
  console.log (alphabetCap);
};