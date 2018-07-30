$(document).ready(() => {

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


//////////////////////////////////////////////////////////////////////////////////////////////////

//Steps Card button reveals .instructions

  var $instructions = $('.instructions');
  var $nextButton = $('.next-button');


  $instructions.hide();
  $nextButton.on('click', event => {
   $(event.currentTarget).closest('.step-card').find('.instructions').slideToggle(300);
  });

//////////////////////////////////////////////////////////////////////////////////////////////////


var $stepsContainer = $('.steps-container');
var $belowButton = $('.below-button');
var $errorButton = $('#errorbutton');


$stepsContainer.hide();
  $belowButton.on('click', event => {
   $(event.currentTarget).closest('.tutorial-container').find('.steps-container').slideToggle(300);
  });

 $errorButton.on('click', event => {
    alert("There are no obvious steps to glitch photography! Try to play around with things such as- \n\n*Layer masks \n*Channels \n*Curves with channels \n*Over saturating and inverting colour \n*Rectangle marquees \n*Layer order and opacity \n*Filters- including pixelate- mosaic \n\nHave fun!!!")
  });
////////////////////////////////////////////////////////////////////////////////////////////////////

 






  }); 