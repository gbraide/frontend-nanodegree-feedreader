/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url of feed is defined and not empty', function() {
            // Loop through allFeeds
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();//ensures URL is defined
                expect(feed.url.length).not.toBe(0);//checks that URL is not empty
            });
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name of feed is defined and not empty', function() {
            // Loop through allFeeds
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();//ensures name is defined
                expect(feed.name.length).not.toBe(0);//checks the name is not empty
            });
        });
    });


    /*New test suite named "The menu" */
    describe('The menu', function() {
        /*Test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {           
            expect($('body').hasClass('menu-hidden')).toBe(true);//checks if menu-hidden is active on body at start
         });

         /*Test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          * This test should have two expectations: 
          *   does the menu display when clicked.
          *   does it hide when clicked again.
          */
          it('changes visibility when clicked', function() {          
            $('.menu-icon-link').click();//simulate click event on menu icon          
            expect($('body').hasClass('menu-hidden')).toBe(false);//check if menu-hidden has been removed. This allows the menu to be visible.       
            $('.menu-icon-link').click();//simulate click event on menu icon  to hide menu          
            expect($('body').hasClass('menu-hidden')).toBe(true);//check if menu-hidden has been added. This allows the menu to be hidden.
          });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
