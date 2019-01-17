const expect = require('chai').expect;
const api = require('./api');
const originalJson = require('./sample.json');


describe("should update json key value",function(){

    it(`should update "testing/test2/" with a string value`,function(){
        const valueToUpdate = "unittesting";
        const keyToUpdate = "/testing/test2/";
        let result = api.updateJson(keyToUpdate,valueToUpdate,originalJson);
        expect(result).to.nested.include({'testing.test2': valueToUpdate},"Value not updated");
    });

    it(`should update "testing/" with a new object`,function(){
        const valueToUpdate = {
            'name':'utkarsh',
            'designation':"nodejs"
    };
        const keyToUpdate = "/testing/";
        let result = api.updateJson(keyToUpdate,valueToUpdate,originalJson);
        expect(result).to.nested.include({'testing': valueToUpdate},"Value not updated");
    });

    it(`should throw property doesn't exist`,function(){
        expect(() => {
            const valueToUpdate = {
                'name':'utkarsh',
                'designation':"nodejs"
            };
            const keyToUpdate = "/abc/";
            api.updateJson(keyToUpdate,valueToUpdate,originalJson);
        }).to.throw(`Child Key/Prop Doesn't Exist`);
    });

    it(`should throw property doesn't exist`,function(){
        expect(() => {
            const valueToUpdate = {
                'name':'utkarsh',
                'designation':"nodejs"
            };
            const keyToUpdate = "/abc/";
            api.updateJson(keyToUpdate,valueToUpdate,"");
        }).to.throw(`Child Key/Prop Doesn't Exist`);
    });

    it(`should throw Provide Valid Key/Path`,function(){
        expect(() => {
            const valueToUpdate = {
                'name':'utkarsh',
                'designation':"nodejs"
            };
            const keyToUpdate = "/";
            api.updateJson(keyToUpdate,valueToUpdate,"");
        }).to.throw(`Provide Valid Key/Path`);
    });
})