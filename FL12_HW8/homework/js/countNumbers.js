function countNumbers(str) {
    let numStr = '';
    let count = {};
    for(let i=0; i < str.length; i++) {
        if(str.charCodeAt([i]) >= 48 && str.charCodeAt([i]) <= 57) {
            numStr += str[i];
        } 
    }
    let arr = numStr.split('');
    arr.forEach(function(el){
        count[el] = count[el] + 1 || 1
    });
    console.log(count);   
}

countNumbers('gcu53441119iij552234isc11');