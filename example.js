let api = require('./index');
let sampleJson = require('./src/sample');
// Sample Examples :

let response = "";

let tempval = {
    "key1":"val1",
    "key2":"val2",
    "key3":{
        "nestkey3":"val3"
    }
}

response = api.updateJson('/testing/test2/',tempval,sampleJson);
console.log(JSON.stringify(response));

let tempval2 = "testing val"

response = api.updateJson('/testing/test2/',tempval2,sampleJson);
console.log(response);

let tempval3 = 3232;

response = api.updateJson('/testing/test2/',tempval3,sampleJson);
console.log(response);