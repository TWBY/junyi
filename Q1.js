function reversechar(string) {
    return string.split("").reverse().join("");
}

var str = "abcdef";
var str2 = "abcdef cow apple";
var strtemp = "";

for (let i = 0; i < 3; i++) {
    console.log(typeof (reversechar(str2.split(" ")[i])));
    // str2 = str2.push(reversechar(str2.split(" ")[i]));
    strtemp += reversechar(str2.split(" ")[i]) + " ";
}
str2 = strtemp;
console.log(str2);