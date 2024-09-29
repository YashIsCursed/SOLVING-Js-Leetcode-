var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};
var n = 19;
console.log(isPalindrome(n));