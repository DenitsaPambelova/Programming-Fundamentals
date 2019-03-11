function bakingRush (input){
    let initEnergy=100;
    let initCoins=100;
    let currentEnergy=0;
    let ingredient='';
    let arr=input.split(/\|/g);
for (let item of arr) {
    let [event, number] = item.split('-');

    if (event === 'rest') {


         if (number+100>100){
            console.log(`You gained $ 0 energy.`)
            console.log(`Current energy: ${initEnergy}.`)
        }else
            if (number+100<100) {
                 initEnergy += +number;
                 console.log(`You gained ${number} energy.`)
                 console.log(`Current energy: ${100 + +number}.`)
         }



    }
    else if (event === 'order') {
        initCoins += +number;
        initEnergy -= 30;

        if (initEnergy < 0) {
            initEnergy += 50;
            console.log(`You had to rest!`)
        }
        else {
            if (initEnergy > 0) {
                console.log(`You earned ${number} coins.`)
            }

        }
    } else {
        ingredient = event;
        initCoins -= number;
        if (initCoins < 0) {
            console.log(`Closed! Cannot afford ${ingredient}.`)

        }
        else {
            console.log(`You bought ${ingredient}.`)
        }

    }



}

       // if (event=="order" && event=="ingredient"&& event=="rest"){
            console.log(`Day completed!`)
            console.log(`Coins: ${initCoins}`)
            console.log(`Energy: ${currentEnergy}`)









}
bakingRush('rest-2|order-10|eggs-100|rest-10')
console.log()
bakingRush('order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000')