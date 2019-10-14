const Array = require('./array')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    //ARR Array { length: 1, _capacity: 3, ptr: 0 }
    console.log("ARR", arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log("ARR", arr);
    //ARR Array { length: 6, _capacity: 12, ptr: 3 }
    arr.pop();
    arr.pop();
    arr.pop();
    console.log("ARR", arr);
    //ARR Array { length: 3, _capacity: 12, ptr: 3 }
    console.log(arr.get(0))
    //3
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida");
    console.log(arr.get(0));
    //NaN
    //purpose of the resize function is to explicitly modify the size of the array 
    function stringify(str) {
        let result = '';
        for(let i = 0; i < str.length; i++) {
            if(str[i] === ' ') {
            i++;
            result = result.concat('%20');
            } 
            result = result + str[i];  
        }
        return result;    
    }
    console.log(stringify('split me up'))

    function filter(arr) {
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 5) {
                newArr[newArr.length] = arr[i]
            }   
        }
        return newArr;
    }
    console.log(filter([1,2,3,4,5]))

    function maxSum(num) {
        return num.reduce(function(a,b) {
            return a + b
          })
    }
    console.log(maxSum([4, 6, -3, 5, 12, 1]))

    function merge(arr1, arr2) {
        let newArr = arr1.concat(arr2);
        let final = newArr.sort(function(a, b){return a-b});
        return final;
    }
    console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

    function removeChar(str, chars) {
        let newStr = '';
        for(let i = 0; i< str.length; i++) {
            let char = str[i].toLowerCase();
            if(chars.indexOf(char) < 0) {
                newStr = newStr + char;
            }
        }
        return newStr;
    }
    console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

    function doubleArr(arr) {
        console.log(arr)
    }
    console.log(doubleArr([
        [1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]]))

    function products(arr) {
        let newArr = [];
        let value = 1;
        for (let i = 0; i < arr.length; i++) {
          value = value * arr[i];
        }
      
        for (let j = 0; j < arr.length; j++) {
          newArr.push(value / arr[j]);
        }
        return newArr;
      }
    console.log(products([1, 3, 9, 4]))

    function rotate(str1, str2) {
        return str1.length === str2.length && str2.repeat(2).includes(str1);     
    }
    console.log(rotate('amazon', 'azonam'))
    console.log(rotate('amazon', 'onzama'))




}
main();
