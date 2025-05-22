function exercise1()
    {
    console.log("Exercise 1");
    console.log("_____________________________");
 
    //Exercise 1.1: Create variables with different data types
    let myAge = 32;
    const myName = "Sanele";
    let isHot = true;
    let person;
    const bigNum = BigInt("12345678987456321");
    const student = {
        fName: "Sipho",
        lName: "Dhlomo",
        grade: 11
    };
    const studentId = Symbol("id");
    let num = null;
 
    //Exercise 1.2: Change the value of a `let` variable and print both old and new values.
 
    console.log("Old value of isHot: " + isHot);
    isHungry = false;
    console.log("New value of isHot: " + isHot);
 
    //Exercise 1.3: Print the variables to the console with their types
       
    console.log(`${myAge} is of type ${typeof myAge}`);
    console.log(`${myName} is of type ${typeof myName}`);
    console.log(`${isHot} is of type ${typeof isHot}`);
    console.log(`${person} is of type ${typeof person}`);
    console.log(`${bigNum} is of type ${typeof bigNum}`);
    console.log(`${student} is of type ${typeof student}`);
    console.log(`${num} is of type ${typeof num}`);
    // console.log(`${studentId} is of type ${typeof studentId}`);
 
    // End of Exercise 1
    console.log("Exercise 1 completed");
    console.log("_____________________________");
    }
 
module.exports = exercise1;