const nums = [1, 98, 9, 11, 18];
const heroes = ["SuperMan", "BatMan", "SpiderMan"];
const myNumbers = new Array(1, 4, 8, 29, 20);

console.log(nums[3]);

nums.push(89);
nums.push(90);
nums.pop();
console.log(nums);


nums.unshift(7);
nums.unshift(888);
nums.shift();
console.log(nums);

console.log(nums.includes(7));
console.log(nums.indexOf(89));
console.log(nums.indexOf(300));

// join converts array to string 
const newNumsArr = nums.join()

console.log(typeof (nums));
console.log(typeof (newNumsArr));
console.log(newNumsArr);

// slice vs splice

const myArr = [0, 1, 2, 3, 4, 5, 6];
console.log("original=", myArr);

console.log(myArr.slice(1, 3));              // 1,2
console.log("after slice =", myArr);

console.log(myArr.splice(1, 3));             // 1,2,3
console.log("After Splice =", myArr);