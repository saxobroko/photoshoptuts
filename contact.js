$(document).ready(function() {

  //////////////////////////////////////////////////////////////////////////////////////////////////

  var $navbutton = $('.nav-button');
  var $navDrop1 = $('.nav-drop1');
  var $revealNavDrop1 = $('.reveal-nav-drop1');
  var $navDrop2 = $('.nav-drop2');
  var $revealNavDrop2 = $('.reveal-nav-drop2');
  var $mainNavLinks = $('.main-nav-links a');
  var $navDropLinks = $('.nav-drop1 a');
  var $mainNav2 = $('.main-nav2')

//Nav button toggle on small screens

  $mainNav2.hide();  
  $navbutton.on('click', () =>{
    $mainNav2.slideToggle();
    return false;
  });


//Dropdown option on navbar link 1 (large)

  $navDrop1.hide();
      
  $revealNavDrop1.on('click', () =>{
    $navDrop1.slideToggle();
    return false;
  })

  $mainNavLinks.on('mouseenter', event =>{
    $(event.currentTarget).css('background-color', '#0a0c2a');
  });  

  $mainNavLinks.on('mouseleave', event =>{
    $(event.currentTarget).css('background-color', '#1a1d4b');
  });  

  $navDropLinks.on('mouseenter', event =>{
    $(event.currentTarget).css('background-color', '#0a0c2a');
  });  

  $navDropLinks.on('mouseleave', event =>{
    $(event.currentTarget).css('background-color', '#1a1d4b');
  });  


//Dropdown option on navbar link 1 (small)

  $navDrop2.hide();
    
  $revealNavDrop2.on('click', () =>{
    $navDrop2.slideToggle();
  })


  $('#myform').submit(function(e) {
    var name    = document.getElementById('inputName')
    var email   = document.getElementById('inputEmail')
    var message = document.getElementById('inputMessage')

    if (!name.value || !email.value || !message.value) {
      alert("All fields must be completed please.");
      return false;
    } 

    //ajax now only works with Gold Version of Formspree, so this is replaced by an html action.
    else {

      /*
      $.ajax({
        method: 'POST',
        url: '//formspree.io/tom.tdigital@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      */
      
      $(this).get(0).reset();
      alert("Message sent");
    }
  });
});