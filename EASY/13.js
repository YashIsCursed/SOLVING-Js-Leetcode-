var romanToInt = function(s) {
    var dict = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
var sum =Number(null);
    var ch = String(s).split('');
    for (let I = 0; I < ch.length; I++) {
        const element = ch[I];
        if (dict[ch[I]]<dict[ch[I+1]]) {
            var diff = dict[ch[I+1]] - dict[ch[I]];
            sum = sum + diff;
            I++;
        }
        else {
            sum = sum + dict[ch[I]];
        }
    };
    return sum;
}
var s = "MCMXCIV";
console.log(romanToInt(s));