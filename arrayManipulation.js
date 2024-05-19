function processArray(arr){
    return arr.map (num=>{
        if(num % 2 === 0) {
            return num ** 2 
        } 
        else{
            return num ** 3;
        }
    });
     
}

function formatArrayStrings(string,number){
    return strings.map (str, index =>{
         if (string.length !== numbers.length ){ 
    return "Error: Array length must be the same.";
         }
    if (num[index] %2 === 0){
    return str.toUpperCase();
    }
    else{
    return str.toLowerCase();
    }
    }); 
}
