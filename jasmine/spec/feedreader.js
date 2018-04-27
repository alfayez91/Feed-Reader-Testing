$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        it('URL defined', function() {
            for (let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        
        it('name defined', function() {
            for (let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function(){

        it('menu element is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        
        it('menu visibility', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    describe('Initial Entries', function(){
        
        // loadFeed(id, cb)
        beforeEach(function (done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('Check if there is at least a single entry elemet', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    let content;
    describe('New Feed Selection', function(){

        
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function() {
                content = $('.feed').html();
                loadFeed(1, done);
            });
        });
        it('Ensures when a new feed is loaded has the content actually changes', function(){
            expect($('.feed').html()).not.toEqual(content);
        });
    });
}());
