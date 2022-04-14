// Create a function that reverses a string
// 'vasu' should be 'usav'

function stringReverse(name) {
  //split the given sting using '' as separtort to convert to array
  //now each charecter is in a array
  //length = 4 i = 0 lastIndex = lenth-1 = 3;
  //lastIndex-i(0) = u
  //lastIndex-i(1) = s
  //lastIndex-i(1) = a
  //lastIndex-i(1) = v
  //join the array to form the string without commas.

  //solution1
  const myArray = name;
  const reverseArray = [];
  for (let i = 0; i < name.length; i++) {
    reverseArray[i] = name[myArray.length - 1 - i];
  }
  console.log(reverseArray.join(""));

  //using split - reverse - join
  //console.log(name.split('').reverse().join(''));
}
//stringReverse("name");

export default stringReverse;
