const num=15;
Number(num%3===0 || num%2===0 || num%5===0) && console.log(1);
Number(num%3===0)+Number(num%2===0)+Number(num%5===0) ===2 && console.log(2);  
Number(num%3===0)+Number(num%1===0)+Number(num%5===0) ===3 && console.log(3); 