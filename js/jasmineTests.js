describe("removeSourceFromTitle() tests", function() {
    
    it("Should return 'Hello'", function() {
        let title = 'Hello - world';
        let slicedTitle = removeSourceFromTitle(title);
        expect(slicedTitle).toBe('Hello');
    });
});