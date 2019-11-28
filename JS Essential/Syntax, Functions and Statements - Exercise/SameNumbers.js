function number(num) {
    
    let number = num.toString().split('').map(Number);
    let totalSum = 0;
    let isTrue = true;
    

    for (let i = 0; i < number.length; i++) {
        let current = number[i];
        totalSum += current;
        
        
        if (number[i] !== number[i + 1] && number[i + 1] !== undefined){
            isTrue = false;
        }
    }
   
    console.log(isTrue);
    console.log(totalSum);
}
number(1234);