const exercise6 = async ()=>
    {
        console.log('Exercise 6');

        // Please Complete Exercise 6 here
        //fetching users from the the API and logging to the console 
        const req = await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => data.forEach((data) => {
                console.log(`Name: ${data.name}`);
                console.log(`Email: ${data.email}`);
                console.log(`Company: ${data.company}`);
            }));

        //fetch posts from /posts and log the titles only
        const request = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => data.forEach((data) => {
                console.log(`Title: ${data.title}`);
            }));

            //Counting the occurance of "qui"
            const ask = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                let quiCount = 0;
                data.forEach((data) => {
                if(data.title.match("qui")) {
                    quiCount++;
                }
                
            }
        )
    });
    // End of Exercise 6
        console.log("Exercise 6 completed");
    }

module.exports = exercise6;
