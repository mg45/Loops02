/********** lev2_1 **********/
let imageArray2 = () => {
    let retArray2 = [];
    let i;
    for (i = 1; i <= 100; i++) {
        if (i <= 9) {
            retArray2.push(`image_00${i}.jpg`);
        } else if (i > 9 && i <= 99) {
            retArray2.push(`image_0${i}.jpg`);
        } else {
            retArray2.push(`image_${i}.jpg`);
        }
    }
    return retArray2;
}

console.log(imageArray2());


/********** lev2_2 **********/
const inputLength = 29;
let letterArray = ["L", "p"];


addLetters = () => {
    for (x = 1; x <= inputLength; x++) {
        console.log(x);
        letterArray.splice(1, 0, "o");
        console.log(letterArray)
    }

    return letterArray.join('');
}

console.log(addLetters());