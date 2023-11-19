function numbers(){
    var Number1 = prompt("enter the first number");
    var elem1 = parseInt(Number1)
    var number2 = prompt("enter the second number");
    var elem2 = parseInt(number2)
    var operator = prompt("enter your desired arithmetic operator");
    var result;
    switch (operator) {
        case '+':
            result = elem1 + elem2;
            alert("the sum is: " + result)

            break;
        case '-':
            result= elem1 - elem2;
            alert("the differnce is: " + result)

            break;
        case '/':
            result = elem1/elem2;
            alert("the divison product is: " + result)

            break;
        case '*':
            result = elem1 * elem2;
            alert("the product is: " + result)

            break;
        
        default:
            alert("invalid operator entered enter +, - , / , * ")
            break;
    }

    
}