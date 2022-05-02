const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
// class VigenereCipheringMachine {
//   constructor(option = true) {
//     if (option) {
//       this.type = "direct";
//     } else {
//       this.type = "reverse";
//     }
//     this.dict = {
//       a: "abcdefghijklmnopqrstuvwxyz",
//       b: "bcdefghijklmnopqrstuvwxyza",
//       c: "cdefghijklmnopqrstuvwxyzab",
//       d: "defghijklmnopqrstuvwxyzabc",
//       e: "efghijklmnopqrstuvwxyzabcd",
//       f: "fghijklmnopqrstuvwxyzabcde",
//       g: "ghijklmnopqrstuvwxyzabcdef",
//       h: "hijklmnopqrstuvwxyzabcdefg",
//       i: "ijklmnopqrstuvwxyzabcdefgh",
//       j: "jklmnopqrstuvwxyzabcdefghi",
//       k: "klmnopqrstuvwxyzabcdefghij",
//       l: "lmnopqrstuvwxyzabcdefghijk",
//       m: "mnopqrstuvwxyzabcdefghijkl",
//       n: "nopqrstuvwxyzabcdefghijklm",
//       o: "opqrstuvwxyzabcdefghijklmn",
//       p: "pqrstuvwxyzabcdefghijklmno",
//       q: "qrstuvwxyzabcdefghijklmnop",
//       r: "rstuvwxyzabcdefghijklmnopq",
//       s: "stuvwxyzabcdefghijklmnopqr",
//       t: "tuvwxyzabcdefghijklmnopqrs",
//       u: "uvwxyzabcdefghijklmnopqrst",
//       v: "vwxyzabcdefghijklmnopqrstu",
//       w: "wxyzabcdefghijklmnopqrstuv",
//       x: "xyzabcdefghijklmnopqrstuvw",
//       y: "yzabcdefghijklmnopqrstuvwx",
//       z: "zabcdefghijklmnopqrstuvwxy",
//     };
//   }
//   encrypt(message, key) {
//     if (!message || !key) {
//       throw new Error("Incorrect arguments!");
//     }
//     let cript;
//     let answ = [];
//     if (message.length > key.length) {
//       cript = Array(Math.ceil(message.length / key.length)).fill(key);
//       cript = cript.join("").slice(0, message.length);
//     }
//     for (let i = 0; i < message.length; i++) {
//       let n = this.dict.a.indexOf([...cript][i].toLowerCase());
//       let letter = this.dict[[...message][i].toLowerCase()].charAt(n);
//       answ.push(letter);
//     }
//     return answ;
//   }
//   decrypt() {}
// }

class VigenereCipheringMachine {
  constructor(option = true) {
    if (option) {
      this.type = "direct";
    } else {
      this.type = "reverse";
    }
    this.dict = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy",
    };
  }

  crypt(plainText, keyword, option) {
    
    let a = "";
    plainText = plainText.toLowerCase();
    let plainText2 = plainText.split(" ");
   
    let plainText4 = plainText.split(" ").join("");
    
    let plainText3 = plainText.replace(/[\W\d_]/g, "");
    
    for (let i = 0; i < Math.ceil(plainText3.length / keyword.length); i++) {
      a += keyword;
    }
    a = a.slice(0, plainText3.length).toLowerCase();
   
    let answ = "";
    for (let i = 0; i < plainText4.length; i++) {
      if (plainText4[i] in this.dict) {
        let n;
        let letter;
        if (option == "encrypt") {
          n = this.dict.a.indexOf(a[i]);
          letter = this.dict[plainText4[i]].charAt(n);
        } else {
          n = this.dict[a[i]].indexOf(plainText4[i]);
          letter = this.dict.a.charAt(n);
        }
        answ += letter;
      } else {
        answ += plainText4[i];
      }
    }

    let answw = [];
    for (let s = 0; s < plainText2.length; s++) {
      answw.push(answ.substring(0, plainText2[s].length));
      answ = answ.slice(plainText2[s].length);
    }

    let res = answw.join(" ").toUpperCase();

    if (this.type == "direct") {
      return res;
    } else return res.split("").reverse().join("");
  }

  encrypt(plainText, keyword) {
    if (!plainText || !keyword) {
      throw new Error("Incorrect arguments!");
    }
    return this.crypt(plainText, keyword, "encrypt");
  }

  decrypt(plainText, keyword) {
    if (!plainText || !keyword) {
      throw new Error("Incorrect arguments!");
    }
    return this.crypt(plainText, keyword,"decrypt");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
