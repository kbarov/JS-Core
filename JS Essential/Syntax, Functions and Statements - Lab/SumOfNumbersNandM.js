function solve(n,m) {
    
    let allSum = 0;
    let firstNum = +n;
    let secondSum = +m;
    for (let i = firstNum; i <= secondSum; i++) {
        allSum += i;
    }
    console.log(allSum);
    

}
solve('1', '5');