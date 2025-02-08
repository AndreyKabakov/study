function displayAnanas() {

    let middle = 'a' / 's';
    result = "a" + middle + "a" + "s";


    console.log(result.toString().toLowerCase());
}

displayAnanas();

function sumDigits(num) {

    if (typeof num !== 'number') {
        return NaN;
    }
    if (num < 0) {
        num = -num;
    }
    num = Math.trunc(num);

    let str = num.toString();

    let sum = 0;

    for (let char of str) {
        sum += Number(char);
    }

    return sum;
}

console.log(sumDigits("123.23a")
)