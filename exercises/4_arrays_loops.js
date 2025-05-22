const exercise4 = ()=>
    {
        console.log('Exercise 4');

        // Please Complete Exercise 4 here
        const testSteps = [ "Click on 'My Account' Drop menu", "Click on 'Register'", "Do not enter any input", "Click on 'Continue' button"]
        testSteps.forEach(step => console.log(step));
        const uppercaseTestSteps = testSteps.map(steps => steps.toUpperCase());
        console.log(uppercaseTestSteps);

        for (let i = 0; i < testSteps.length; i++) {
            console.log(`In this step we ${testSteps[i]}. `);
        }
        // End of Exercise 4
        console.log("Exercise 4 completed");
    }   

module.exports = exercise4;
