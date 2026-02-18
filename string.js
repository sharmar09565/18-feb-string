// let str1 = "Rohit";
// let str = "ksodnv13";

// console.log(str2.replace('k','o'));

// METHODS

// str.toUpperCase();
// str.toLowerCase();
// str.length;
// str.trim();     // remove extra spaces
// str.slice(initialIdx, End);
// str.split(value);       // converts string to after checking seperation like , - ;

// console.log(str[0].toUpperCase() + str.slice(1,str.length+1));

// console.log(str2);



function nonRepeatChar(str) {
    let isMatch;
    for (let i = 0; i < str.length; i++) {
        isMatch = false;
        for (let j = 0; j < str.length; j++) {
            if (i == j ) {
                continue;
            }
            else if (str[i] == str[j]) {
                isMatch = true;
                break;
            }

        }
        if (!isMatch) {
            console.log(str[i]);
        }

    }

}
nonRepeatChar("abbbcddaaefh");