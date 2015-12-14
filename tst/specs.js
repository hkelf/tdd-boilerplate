//Write ur tests here

describe('boilerplate', function() {

    it('is true', function() {
        var isTrue = getTruth();

        expect(isTrue).toBe(true);
    });

    it('isnt false', function() {
        var isTrue = getTruth();

        expect(isTrue).not.toBe(false);
    });

});