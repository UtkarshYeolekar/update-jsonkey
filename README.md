[![travis build](https://img.shields.io/travis/UtkarshYeolekar/update-jsonkey.svg)](https://travis-ci.org/UtkarshYeolekar/update-jsonkey)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![codecov](https://codecov.io/gh/UtkarshYeolekar/update-jsonkey/branch/master/graph/badge.svg)](https://codecov.io/gh/UtkarshYeolekar/update-jsonkey)
[![Vesion](https://img.shields.io/npm/v/update-jsonkey.svg)](https://www.npmjs.com/package/update-jsonkey)
[![Downloads](https://img.shields.io/npm/dm/update-jsonkey.svg)](https://www.npmjs.com/package/update-jsonkey)

# update-jsonkey
In many scenario's we need to update a existing json key value with the new one. I have written a api, where we needs to provide a path of the key to update from the root.

## To run the example

- npm install
- npm run example

## Unit Testing

- npm run test

### Sample Json Provided

- In this example, i have provided a sample json initally, you can replace the content with your json, or can pass dynamic json.

- Sample Json 
```{
 "testing":{
        "test1":{
            "a":11,
            "b":232
        },
        "test2":{
            "xy":233,
            "zz":"abc xyz",
            "json":{
                "msm":"sds",
                "abc":"weuewo"
                }
            }
    }
}

```
- How to use the Api

- Example 1: 

    > Suppose if need to update the value of the key "json" in "test2" node i.e testing->test2->json. 

    > Here root key is "testing" the node in which, we need to find the child key.

    > "json" is the end child node, which we need to update.

    > The path param value will be "/testing/test2/json".

    > The Api call will be :

        function prototype : api.updateJson(path,value,exitingjson)

        api.updateJson("/testing/test2/json","newvalue",json)
    
        Value can be anything (String, Number, Json)

    > In response it will return the full updated json.


- Example 2:

    > Suppose if need to update the value of the root key "testing" itself.

    > Here root key is "testing" the node itself is the parent & child.

    > The path param value will be "/testing".

        api.updateJson("/testing","newvalue",json)