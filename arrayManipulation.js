function processArray(arr){
    return arr.map (num=>{
        if(num % 2 === 0) {
            return num ** 2 
        } 
        else{
            return num** 3;
        }
    });
     
}