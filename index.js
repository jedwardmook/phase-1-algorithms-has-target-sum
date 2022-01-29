function hasTargetSum(array, target) {
  // Write your algorithm here
  const sum1 = array[0] + array[1]
  const sum2 = array[0] + array[2]
  const sum3 = array[0] + array[3]
  const sum4 = array[0] + array[4]
  const sum5 = array[0] + array[5]
  const sum6 = array[1] + array[2]
  const sum7 = array[1] + array[3]
  const sum8 = array[1] + array[4]
  const sum9 = array[1] + array[5]
  const sum10 = array[2] + array[3]
  const sum11 = array[2] + array[4]
  const sum12 = array[2] + array[5]
  const sum13 = array[3] + array[4]
  const sum14 = array[3] + array[5]
  const sum15 = array[4] + array[5]
    if(sum1 === target){
      return true
    }else if(sum2 === target){
      return true
    }else if(sum3 === target){
      return true
    }else if(sum4 === target){
      return true
    }else if(sum5 === target){
      return true
    }else if(sum6 === target){
      return true
    }else if(sum7 === target){
      return true
    }else if(sum8 === target){
      return true  
    }else if(sum9 === target){
      return true
    }else if(sum10 === target){
      return true
    }else if(sum11 === target){
      return true
    }else if(sum12 === target){
      return true
    }else if(sum13 === target){
      return true
    }else if(sum14 === target){
      return true
    }else if(sum15 === target){
      return true
    }else {
      return false
    }
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
