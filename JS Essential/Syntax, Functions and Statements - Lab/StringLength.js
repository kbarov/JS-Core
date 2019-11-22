function stringLenght(string1, string2, string3) {
    
    let totalSum;
    let averageSum;

    let firstSum = string1.length;
    let secondSum = string2.length;
    let thirdSum = string3.length;


    totalSum = firstSum + secondSum + thirdSum;
    averageSum = Math.floor(totalSum / 3);

    
    console.log(totalSum);
    console.log(averageSum);
    
    
}
stringLenght('chocolate', 'ice cream', 'cake');