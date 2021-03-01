export function toRoman(num) {
    let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let RomanArr = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let result = [];

    const findElement = e => {
        return e <= num;
    };

    while (num > 0) {
        let nextHighest = numberArr.find(findElement);

        result.push(RomanArr[numberArr.indexOf(nextHighest)]);
        num -= nextHighest;
    }
    let roman = result.join("");

    return roman;
}

export function fromRoman(num) {
    const legend = "IVXLCDM";
    const l=[1,5,10,50,100,500,1000];
    let sum=0;
    while(num){
       if(!!num[1] && legend.indexOf(num[0]) < legend.indexOf(num[1])){
          sum += (l[legend.indexOf(num[1])] - l[legend.indexOf(num[0])]);
          num = num.substring(2, num.length);
       } else {
          sum += l[legend.indexOf(num[0])];
          num = num.substring(1, num.length);
       }
    }
    return sum;
 };


export function isRoman(value) {
    const _regexp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    console.log(_regexp.test(value))
    return _regexp.test(value);
}