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
                    throw new Error(`Child Key/Prop Doesn't Exist`);
                }
                else {
                    let updatedObj = json;
                    val = updateProp(childKeypath, rootKeyjson, value);
                    updatedObj[rootKey] = val;
                    return updatedObj;
                }
            }
            catch (err) {
                throw err;
            }
        }
        else {
            throw new Error(`Provide Valid Key/Path`);
        }
    }
}


// helper function for the above method.
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
