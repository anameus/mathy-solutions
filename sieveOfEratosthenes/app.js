//version 2.0
//2018/06
for(var i=2; i<100; i++){
    let isPrime = true;
    for(var j=2; j<i; j++){
        if(i%j === 0){
            isPrime = false;
        }
    } 
    if (isPrime === true) { console.log(i); }
}