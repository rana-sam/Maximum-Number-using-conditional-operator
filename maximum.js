let num1,num2;
num1=parseInt(prompt("enter first number"));
num2=parseInt(prompt("enter second number"));
function max(num1,num2) {
    let maximumNumber=(num1>num2)?num1:num2 ;
    return maximumNumber;
}

let result=max(num1,num2);
console.log("Maximum number is "+result);