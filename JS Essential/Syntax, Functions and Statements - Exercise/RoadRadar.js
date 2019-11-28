function solve(array) {

    let speed = array[0];
    let area = array[1];
    let difference = 0;


    switch (area) {
        case 'motorway':
            if (speed > 130) {
                difference = Math.abs(speed - 130);
                if (difference > 40) {
                    console.log('reckless driving');
                } else if (difference >= 21 && difference <= 40) {
                    console.log('excessive speeding');
                } else if (difference >= 1 && difference <= 20) {
                    console.log('speeding');
                }
            }
            break;
        case 'interstate':
            if (speed > 90) {
                difference = Math.abs(speed - 90);
                if (difference > 40) {
                    console.log('reckless driving');
                } else if (difference >= 21 && difference <= 40) {
                    console.log('excessive speeding');
                } else if (difference >= 1 && difference <= 20) {
                    console.log('speeding');
                }
            }
            break;
        case 'city':
            if (speed > 50) {
                difference = Math.abs(speed - 50);
                if (difference > 40) {
                    console.log('reckless driving');
                } else if (difference >= 21 && difference <= 40) {
                    console.log('excessive speeding');
                } else if (difference >= 1 && difference <= 20) {
                    console.log('speeding');
                }
            }
            break;
        case 'residential':
            if (speed > 20) {
                difference = Math.abs(speed - 20);
                if (difference > 40) {
                    console.log('reckless driving');
                } else if (difference >= 21 && difference <= 40) {
                    console.log('excessive speeding');
                } else if (difference >= 1 && difference <= 20) {
                    console.log('speeding');
                }
            }
            break;
    }

}
solve([21, 'residential']);