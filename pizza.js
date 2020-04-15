
var pizzaToppings = ["Cheese", "Pepperoni", "Garlic", "Peppers"];
    //console.log("Enjoy your pizza with " + pizzaToppings);

function pizza (){
    var addToppings = pizzaToppings.join(' and ');

    return " A delicious pizza that has " + addToppings;
};

console.log(pizza());