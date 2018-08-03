"use strict";
const Nightmare = require( "nightmare" ),
      expect = require( "chai" ).expect,
      BASE_URL = "http://todomvc.com/examples/backbone/",
      onError = ( err ) => {
        console.error( "Test-runner failed:", err );
      },
      browser = new Nightmare({
        show: true,
        typeInterval: 20,
        pollInterval: 50
      });

// const Jasmine = require('jasmine');
// const jasmine = new Jasmine();
// // jasmine.loadConfig({
// //     spec_dir: 'test',
// //     spec_files: ['**/*[sS]pec.js'],
// //     helpers: ['helpers/**/*.js'],
// //     random: false,
// //     seed: null,
// //     stopSpecOnExpectationFailure: false
// // });
// jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
//
//
// const JasmineConsoleReporter = require('jasmine-console-reporter');
// const reporter = new JasmineConsoleReporter({
//     colors: 1,           // (0|false)|(1|true)|2
//     cleanStack: 1,       // (0|false)|(1|true)|2|3
//     verbosity: 4,        // (0|false)|1|2|(3|true)|4
//     listStyle: 'indent', // "flat"|"indent"
//     activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
//     emoji: true,
//     beep: true
// });
//
// jasmine.env.clearReporters();
// jasmine.addReporter(reporter);
// jasmine.execute();

describe( "A spec to set up timeout", function() {
      var timeoutPromise = new Promise(function(resolve, reject){
          setTimeout(resolve, 5000);
      });
      // start up with the blank list
      beforeEach( function(done)  {
            console.log("beforeEACH");
            timeoutPromise.then(function() {
                // timeout resolved, test initialization in this block done
                console.log("error");
                done('error');
            });
            browser
                .goto( BASE_URL )
                .evaluate(() => {
                      return localStorage.clear();
                })
                .then(() => {
                    done();
                });
      });

      // disconnect and close Electron process
      afterEach( function() {
            browser
            .end();
      });

      // insert here the tests
      it( "should add an item to the list", function(done) {
            console.log("first test");
            const NEWTODO_INPUT = ".new-todo";
            browser
            .refresh()
            .wait( NEWTODO_INPUT )
            // type a todo and press ENTER
            .type( NEWTODO_INPUT, "watch GoT" )
            .type( NEWTODO_INPUT, '\u000d')
            // wait until the list receives the item
            .wait( ".todo-list li" )
            // get the number of available items
            .evaluate(() => {
                return document.querySelectorAll( ".todo-list li" ).length;
              })
              .then(( res ) => {
                expect( res ).to.eql( 1 );
                console.log("res is " + res)
                done();
              }).catch( onError );

            console.log("before expect")
            expect(true).to.be.true;
      });
});
