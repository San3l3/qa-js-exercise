const exercise2 = ()=>
    {
        console.log('Exercise 2');

        // Please Complete Exercise 2 here

        //String representing a response
        let userRes = "I have used API's before.";

        //Clean up whitespaces and convert it to lowercase
        userRes.trim(" ").toLowerCase();

        //Check if cetain keywords exist
        userRes.includes("before");

        // replace part of a string 
        userRes.replace("used", "utalised")

        

        // End of Exercise 2
        console.log("Exercise 2 completed");
    }

module.exports = exercise2;