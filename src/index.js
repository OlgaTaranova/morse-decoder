const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = [];
    let letterArray = expr.match(/.{10}/g);
  
    for (let letter of letterArray) {
      
      if (letter == "**********") {
        output.push(' ');
      }else {
        let dotsDashesArray = letter.match(/\d{2}/g);
        let morseLetter = [];
        
        for (let element of dotsDashesArray) {
          if (element == '10') {
            morseLetter.push('.');
          }else if (element == '11') {
            morseLetter.push('-');
          }
        }
        output.push(MORSE_TABLE[morseLetter.join('')]);
      }                
    }
  return output.join('');
}

module.exports = {
    decode
}