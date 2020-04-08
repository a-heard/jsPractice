function sandwichCalculator(slicesOfBread, slicesOfCheese){
    var sandwiches = slicesOfBread / 2;
    
    if ((slicesOfBread > 1 ) && (slicesOfCheese > 0) && (
        slicesOfCheese < sandwiches)) {
            sandwiches = slicesOfCheese;
            console.log(sandwiches);
            return sandwiches;
        } else if (slicesOfCheese >= sandwiches) {
            console.log(sandwiches);
            return  sandwiches;
        }


}
sandwichCalculator(10,1);