const fs = require('fs');
const axios = require('axios');

//using fs module to create the "result" directory
const dir = './result';
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, {
		recursive: true
	});
}

//fetching data from http://jsonplaceholder.typicode.com/posts using axios module
axios.get("http://jsonplaceholder.typicode.com/posts")
    .then((result) => {

        //converting the fetched result into JSON string format
        const jsonData = JSON.stringify(result.data);

        // writing data to results/posts.json file
        fs.writeFile("./result/posts.json", jsonData, (err) => {
            err ? console.log(err) : console.log("File created successfully");
        })
    })

.catch((error) => {
    console.log(error);
})