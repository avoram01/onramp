var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  // .goto('http://facebook.com')
  // .type('#email', 'andreav411@sbcglobal.net')
  // .type('#pass', 'october1998')
  // .click('#loginbutton input[type=submit]')
  //
  // .wait('#left_nav_section_nodes')
  // .goto('https://www.facebook.com/tiffany.chou.311')
  //
  // .wait('#pagelet_bluebar')
  // .type('div [role="textbox"]', 'hey dweeb')
  // .wait(1000)
  // //.wait('#timeline_composer_container button')
  // .type('div [role="textbox"]', 'hi')
  // .click('#timeline_composer_container button[type=submit]')
  //
  // .wait('[data-referrer = "pagelet_timeline_recent_ocm"]')
  // .goto('https://www.facebook.com/tiffany.chou.311')

  .goto('http://www.kidguard.com')
  // .wait("#lp-pom-button-381")
  // .click("#lp-pom-button-381")
  // .wait("#first_name")
  // .type("#theForm input[#first_name]", "Andrea")
  // .type("#last_name", "Voram")
  // .type("#email", "andrea@gmail.com")
  // .type("#phone", "1111111111")
  // .wait(8000)

  .evaluate(function() {
    return location.href
  })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Login failed:', error)
  })
