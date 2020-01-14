// task 1 
function convert() {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            newArr.push(arguments[i].toString());
        } else if (typeof arguments[i] === 'string') {
            newArr.push(+arguments[i]);
        }
    }
    return newArr;
}
convert();

// task 2 
function executeForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeForEach();

// task 3 
function mapArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(+arr[i]));
    }
    return result;
}
mapArray();

// task 4 
function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}
filterArray();

// task 5 
function flipOver(str) {
    let reversStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
    }
    return reversStr;
}
flipOver('hey world');

// task 6 
function makeListFromRange([a, b]) {
    let list = [];
    for (let i = a; i <= b; i++) {
        list.push(i);
    }
    return list;
}
makeListFromRange();

// task 7 
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(actors, key) {
    let result = [];
    for (const item of actors) {
        result.push(item[key])
    }
    return result
}
getArrayOfKeys(actors, 'name');

// task 8 
function substitute(arr) {
    const THIRTY = 30;
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < THIRTY) {
            numArr.push('*');
        } else if (arr[i] > THIRTY) {
            numArr.push(arr[i]);
        }
    }
    return numArr;
}
substitute();

// task 9 
function getPastDay(date, count) {
    const MILLISECONDS = 86400000; //24*3600*1000
    return new Date(date.getTime() - count * MILLISECONDS).getDate();
}
getPastDay();

// task 10 
function formatDate(date) {
    const TEN = 10;
    let hour = date.getHours();
    if (hour < TEN) {
        hour = '0' + hour;
    }
    let minutes = date.getMinutes();
    if (minutes < TEN) {
        minutes = '0' + minutes;
    }
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${hour}:${minutes}`;
}
formatDate(new Date());
