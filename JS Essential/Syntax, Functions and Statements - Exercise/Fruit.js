function fruit(fruit, weight, kilogram) {
    
    let totalWeight = weight * kilogram / 1000;
    let totalKilogram = weight / 1000;

    console.log(`I need $${totalWeight.toFixed(2)} to buy ${totalKilogram.toFixed(2)} kilograms ${fruit}.`);
    

}
fruit('orange', 2500, 1.80);