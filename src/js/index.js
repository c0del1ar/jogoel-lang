const { ALPH1, ALPH2, VOCALS } = require("./vars");
const { in_alph1, in_alph2, in_vocal, listing } = require("./check");

const basa1 = Object.fromEntries(ALPH1.map((key, i) => [key, ALPH2[i]]));
const basa2 = Object.fromEntries(ALPH2.map((key, i) => [key, ALPH1[i]]));

function encode(chars) {
    return Crypt(chars);
}

function decode(chars) {
    return Crypt(chars, false);
}

function Crypt(letter, enc = true) {
    const letters = listing(vocal_toha(letter.toLowerCase()));
    let retVal = "";
    for (const w of letters) {
        if (in_alph1(w)) {
            retVal += basa1[w];
        } else if (in_alph2(w)) {
            retVal += basa2[w];
        } else {
            retVal += w;
        }
    }
    if (enc) {
        return retVal;
    } else {
        return hato_vocal(retVal);
    }
}

function vocal_toha(char) {
    const letters = " " + char;
    let retVal = "";
    for (let i = 0; i < letters.length; i++) {
        const ch = letters[i];
        if (in_vocal(letters[i])) {
            if (letters[i - 1] === " " || letters[i - 1] in VOCALS) {
                retVal += "h";
            } 
        }
        retVal += ch;
    }
    return retVal.slice(1);
}

function hato_vocal(char) {
    const letters = " " + char;
    let retVal = "";
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "h") {
            if (letters[i - 1] !== " " || letters[i + 1] === ' ') {
                if (!in_vocal(letters[i - 1])) {
									retVal += letters[i];
                }
            } 
        } else {
            retVal += letters[i];
        }
    }
    return retVal.slice(1);
}

module.exports = {
	basa1,
	basa2,
	encode,
	decode,
	Crypt,
	vocal_toha,
	hato_vocal
};