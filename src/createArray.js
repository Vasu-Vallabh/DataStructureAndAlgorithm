//create an array using DS

//An array is a DS of continigious storage of data
//It has a length property which returs the size of elements in the array
//It has a push property to insert element at the last of an array
//It has a pop property to remove the last element on an array
//It has a delete property to delete the given index from an array
//After every function call array returns its lenght

//create a call with 2 variable and 3 functions
//2 properties -> length and data
//3 functions -> push, pop, delete

class myArray {
  constructor(length, data) {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    //pushes the element at the end of the array
    // increase the length
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    //delete the last element in the data
    // decrease the lenth

    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    //shift indexes to the left
    //delete the last element
    //decrease the length
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const vArray = new myArray();
vArray.push("v");
vArray.push("A");
vArray.push("S");
vArray.push("U");
vArray.delete(3);
console.log(vArray);

export default myArray;
