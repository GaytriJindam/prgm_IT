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


function TotalPrice(basket,prices)
{
    sum = 0;
    for(let product in basket)
    {
        if(prices[product]!=undefined)
        {
            sum+=basket[product]*prices[product];
        }
    }
    
    alert("Basket Sum = "+sum);
    return sum;
}

alert(TotalPrice({'Honda':2,'Honda-city':1},{'Honda':6000,'Honda-city':4000}))
