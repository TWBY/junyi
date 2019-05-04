function reversechar(string) {
    return string.split("").reverse().join("");
}

var str = "abcdef";
var str2 = "abcdef cow apple";


for (let i = 0; i < 3; i++) {
    console.log(reversechar(str2.split(" ")[i]));
    str2 = str2.concat(reversechar(str2.split(" ")[i]));
}
console.log(str2);