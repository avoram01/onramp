"use strict";
const Nightmare = require( "nightmare" ),
      expect = require( "chai" ).expect,
      BASE_URL = "https://www.kidguard.com/",
      onError = ( err ) => {
        console.error( "Test-runner failed:", err );
      },
      browser = new Nightmare({
        show: true,
        typeInterval: 20,
        pollInterval: 50
      });


describe("Live demo", function(done) {
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
    
    it ("should view all recent texts", function(done){
        done();
    });


//     it ("should view all recent calls", function(done){
//
//     });
//
//     it ("should view messages", function(done){
//
//     });
//
//     it ("should view photos", function(done){
//
//     });
//
//     it ("should view browser", function(done){
//
//     });
//
//     it ("should view calls", function(done){
//
//     });
//
//     it ("should view contacts", function(done){
//
//     });
//
//     it ("should view location", function(done){
//
//     });
//
//     it ("should view whatsapp", function(done){
//
//     });
//
//     it ("should view facebook messenger", function(done){
//
//     });
//
//     it ("should view snapchat", function(done){
//
//     });
//
//     it ("should activate situation360", function(done){
//
//     });
//
//     it ("should sign up for free trial", function(done){
//
//     });
//
//     it ("should view other child", function(done){
//
//     });
 });
//
// describe("10 day free trial", function() {
//
// });
//
// describe("About us", function() {
//
// });
//
// describe("Press", function() {
//
// });
//
// describe("Resources", function() {
//
// });
//
// describe("Features", function(){
//
// });
