function makeNumber(str) {
    let numStr = '';
    for(let i=0; i < str.length; i++) {
        if(str.charCodeAt([i]) >= 48 && str.charCodeAt([i]) <= 57) {
            numStr += str[i]
        } 
    }
    return numStr;
}

makeNumber('efh258488');
makeNumber('1436jivuf785les');
makeNumber('jdnivuivbu');