let R = require('ramda');


module.exports = {

    updateJson: (path,value,json) => {
        if (path && path != "/" && value != undefined) {
            try {
                keyToUpdate = trimSlashes(path),
                    // breaking path by '/'.
                    paths = keyToUpdate.split("/"),
                    // finding secret key and node to update.
                    rootKey = paths[0],
                    childKeypath = getChildNodes(paths);

                let rootKeyjson = getRootKeyValFromJson(json, rootKey);
                let prop = checkPropIfExist(childKeypath, rootKeyjson);
                if (prop == undefined)
                {
                    console.log(`Child Key/Prop Doesn't Exist`);
                    return;
                }
                else {
                    let updatedObj = json;
                    val = updateProp(childKeypath, rootKeyjson, value);
                    updatedObj[rootKey] = val;
                    return updatedObj;
                }
            }
            catch (err) {
                console.error(`Some error Occured`,err);
                throw err;
            }
        }
        else
            console.log(`Provide Valid Key/Path`);
    }
}

let trimSlashes = (str) => str.replace(/^\/|\/$/g, ''),

    getChildNodes = (arr) => {
        let cparr = arr.slice();
        cparr.shift();
        return cparr;
    },

    getRootKeyValFromJson = (json, key) => {
        if (json && key != "/") {
            return json[key]
        }
        else if (key == "/")
            return json;
        else
            return;
    }

checkPropIfExist = (path, obj) => {
    return R.path(path, obj);
},

    updateProp = (path, obj, value) => {
        let Rpath = R.lensPath(path);
        return R.set(Rpath, value, obj);
}

