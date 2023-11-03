const { VOCALS, ALPH1, ALPH2 } = require("./vars");

function in_vocal(w) {
    return VOCALS.includes(w);
}

function in_alph1(w) {
    return ALPH1.includes(w);
}

function in_alph2(w) {
    return ALPH2.includes(w);
}

function listing(chars) {
    var res = [];
    var c = 0;
    while (c < chars.length) {
        if (c < chars.length - 1) {
            if (
                chars[c] + chars[c + 1] === "dh" ||
                chars[c] + chars[c + 1] === "ny" ||
                chars[c] + chars[c + 1] === "ng" ||
                chars[c] + chars[c + 1] === "th"
            ) {
                if (chars[c] !== " ") {
                    res.push(chars[c] + chars[c + 1]);
                    c += 2;
                } else {
                    res.push(chars[c]);
                    c += 1;
                }
            } else {
                res.push(chars[c]);
                c += 1;
            }
        } else {
            res.push(chars[c]);
            c += 1;
        }
    }
    return res;
}

module.exports = {
	in_vocal,
	in_alph1,
	in_alph2,
	listing
};