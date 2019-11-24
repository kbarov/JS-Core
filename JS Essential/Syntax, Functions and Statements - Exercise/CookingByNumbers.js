function solve(array) {

    let startingPoint = +array[0];

    for (let i = 1; i < array.length; i++) {
        
        if (array[i] === 'chop') {
            startingPoint /= 2;
        } else if (array[i] === 'dice') {
          startingPoint = Math.sqrt(startingPoint);
        } else if (array[i] === 'spice') {
            startingPoint += 1;
        } else if (array[i] === 'bake') {
            startingPoint *= 3;
        } else if (array[i] === 'fillet') {
            startingPoint -= startingPoint * 0.2;
        }
        console.log(startingPoint);
    }
    
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);