/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/


let n = 1;
let sum = 0;

while(n <= 200){
    
    if(n === 101){
        break;
    }
    sum += n;
    console.log(n);
    n++;
}
console.log("Sum: ", sum);