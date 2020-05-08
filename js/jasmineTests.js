describe("removeSourceFromTitle() tests", function() {
    
    it("Should return 'Hello'", function() {
        let title = 'Hello - world';
        let slicedTitle = removeSourceFromTitle(title);
        expect(slicedTitle).toBe('Hello');
    });

    it("Should return 'Headline'", function() {
        let title = 'Headline';
        let slicedTitle = removeSourceFromTitle(title);
        expect(slicedTitle).toBe('Headline');
    });
    
    it("Should return ''", function() {
        let title = '';
        let slicedTitle = removeSourceFromTitle(title);
        expect(slicedTitle).toBe('');
    });

    it("Should return 'word-with-hyphens'", function() {
        let title = 'word-with-hyphens - source';
        let slicedTitle = removeSourceFromTitle(title);
        expect(slicedTitle).toBe('word-with-hyphens');
    });

    it("Should return an error", function() {
        let title = 125412;
        expect(() => removeSourceFromTitle(title)).toThrow(new TypeError('string.indexOf is not a function'));
    });

    it("Should return ['apple', 'banana', 'coconut']", function() {
        let title = ['apple', 'banana', 'coconut'];
        expect(removeSourceFromTitle(title)).toEqual(['apple', 'banana', 'coconut']);
    });

    it("Should return an error", function() {
        let title = {'number': 1232, ' - ': 'separator', 'string': 'some_string'};
        expect(() => removeSourceFromTitle(title)).toThrow(new TypeError('string.indexOf is not a function'));
    });
});