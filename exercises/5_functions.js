const exercise5 = ()=>
    {
        console.log('Exercise 5');

        // Please Complete Exercise 5 here
        // logResult("Performance", 8);
        // logResult("Performance", 3);

        //function that logs the testName and status
        function logResult(testName, status) {
            //Checking testing time and log the report
            if (Loadtime > 5) {
                console.log(`${testName} : ${status}`);
            }
            else {
                console.log(`${testName} : ${status}`)
            }

        }

        //test report object
        const testCase = {
            testName: "compatibility",
            testId: 1,
            testerName: "Sanele",
            status: "passed"
        }

        //function to return a formated report froma test case object
        console.log(testReport(testCase));
        function testReport(rep) {
            return `Test Name:  ${testCase.testName}\nTestID: ${testCase.testId}\nTester: ${testCase.testName}\nStatus: ${testCase.status}`
        }

        //function to log elapse time

        console.log(calculateDuration(7, 16));
        function calculateDuration(startTime, endTime) {
            let elapsedTime = endTime - startTime;
            return `The testing process took ${elapsedTime} hours`;
        }

        

        // End of Exercise 5
        console.log("Exercise 5 completed");
    }


module.exports = exercise5;