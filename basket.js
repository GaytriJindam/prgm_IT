alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

let basketCost=(b,p)=>{
    alert("doing something");
    return 0; //clearly wrong!
}

const basket={
    "Honda" : 2,
    "Honda-city" : 1
}

const prices = {
    "Honda" : 3000,
    "Honda-city" : 4000
}

function cal_Sum(b,p)
{
    return Object.keys(b).reduce((sum,product) =>
        if(p.isExists)
                                 {
        sum+=product;
                                 });
    console.log(sum);
    
}
alert(basketCost({},{}))
