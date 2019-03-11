function baking(input) {
    let arr = input.map(el => Number(el));
    let [budget, students, flourPrice, eggPrice, apronPrice] = arr;

    let freePackages=0;
    for (i=1;i<=students;i++) {

        if (i % 5 === 0) {
            freePackages += 1
        }
    }
        let neededItems = apronPrice * (students + Math.ceil(0.20 * students)) + eggPrice * 10 * students + (flourPrice * (students - freePackages));
      if (neededItems<=budget)  {console.log(`Items purchased for: ${neededItems.toFixed(2)}$`)}
      else {
          console.log(`${(neededItems-budget).toFixed(2)}$ more needed`);
      }


}
baking([50,2,1.0,0.10,10.0])
baking([100,25,4.0,1.0,6.0])