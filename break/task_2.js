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