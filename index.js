let score = {
    checkerror: function (score) {
        if (score < 0) {
            try {
                throw new EvalError('Error occurred');
            } catch (e) {
                console.log(e.message);
            }
        }
    }
}
console.log(score.checkerror(-3));

function check1(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.");
    }
}

try {
    check1(2000);
} catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
}

function check2(value) {
    if (["apple", "banana", "carrot"].includes(value) === false) {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".');
    }
}

try {
    check2("cabbage");
} catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
}