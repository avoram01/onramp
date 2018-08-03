/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  // .goto('http://www.google.com')
  // .type('form[action*="/search"] [name=q]', 'onramp lab')
  // .click('form[action*="/search"] [type=submit]')
  // .wait('#res')
  // .evaluate(function() {
  //   return document.querySelector('.rc a').href
  // })
  // .then(function(result) {
  //   console.log(result)
  // })

  .goto ("https://www.kidguard.com/funnel/payment/011/d")

  // SAME AS FUNNEL A
  .type("input[name='name_on_card']", "andrea vora")
  .wait(1000)
  .type("input[name='card_number']", "4242424242424242")
  .wait(1000)
  .type("input[name='cvv']", "424")


  .wait(2000)
  .type("input[name='expirationMY']", "0424")
  .wait(2000)

  // SAME AS FUNNEL B
  .type("#address1", "123 Main Street")
  .type("#city", "Smallville")
  .type("#state", "CA")


  .type("input[name='zipcode']", "12345")
  .click("input[type='checkbox']")
  .wait(10000)



  .end()
  
  .catch(function(error) {
    console.error('Search failed:', error)
  })

   
