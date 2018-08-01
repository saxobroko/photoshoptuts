$(document).ready(() => {

//////////////////////////////////////////////////////////////////////////////////////////////////

  var $navbutton = $('.nav-button');
  var $navButtonImg = $('.nav-button img');
  var $navDrop1 = $('.nav-drop1');
  var $revealNavDrop1 = $('.reveal-nav-drop1');
  var $navDrop2 = $('.nav-drop2');
  var $revealNavDrop2 = $('.reveal-nav-drop2');
  var $mainNavLinks = $('.main-nav-links a');
  var $navDropLinks = $('.nav-drop1 a');
  var $mainNav2 = $('.main-nav2')
  let iSeeNavMenu = false;

//Nav button toggle on small screens

  $mainNav2.hide();  
  $navbutton.on('click', () =>{
    $mainNav2.slideToggle();
    if (!iSeeNavMenu) {
      $navButtonImg.attr('src','./pics/simplenavicon2.jpg');
      iSeeNavMenu = true;
    } else {
      $navButtonImg.attr('src','./pics/simplenavicon.jpg');
      iSeeNavMenu = false;
    };
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

//Photo Card button reveals more info

  var $revealMore = $('.reveal-more');
  var $nextButton = $('.next-button');
  var $score = $('.score');
  let iSeeTuts= false;

  $revealMore.hide();
  $nextButton.on('click', event => {
   $(event.currentTarget).closest('.pic').find('.reveal-more').slideToggle(300);
   if (!iSeeTuts) {
    $(event.currentTarget).addClass('rotate');
    iSeeTuts = true;
  } else {
    $(event.currentTarget).removeClass('rotate');
    iSeeTuts = false;
  }
  });


//Link changes background-color on hover

  var $link = $('.tut-links a')
  
  $link.on('mouseenter', event =>{
    $(event.currentTarget).css('background-color', '#74b0e9');
  });  
  $link.on('mouseleave', event =>{
    $(event.currentTarget).css('background-color', '#85c0fa');
  });  



  //Link changes to waterfall photo

  var $tone = $('#tone');
  var $colour = $('#colour');

  $tone.on('mouseenter', event =>{
    $("#waterfall").attr("src", "./pics/enhancementpreview.jpg");
    
  });
 

  $colour.on('mouseenter', event =>{
    $("#waterfall").attr("src", "./pics/waterfallpreview2.jpg");
  });  


    //Link changes to cutout blend photo

  var $solid = $('#solid');
  var $overlays = $('#overlays');

  $solid.on('mouseenter', event =>{
    $("#cutout").attr("src", "./pics/cutout-example3a.jpg");
    
  });

  $overlays.on('mouseenter', event =>{
    $("#cutout").attr("src", "./pics/cutout-example2.jpg");
  });  


    //Link changes to glitch photo

  var $mexLink = $('#mexlink');
  var $glitchLink = $('#glitchlink');

  $mexLink.on('mouseenter', event =>{
    $("#mex").attr("src", "./pics/mexample1a.jpg");
    
  });

  $glitchLink.on('mouseenter', event =>{
    $("#mex").attr("src", "./pics/glitch-example3a.jpg");
  });  


    //Link changes to vortex photo

  var $symmLink = $('#symmlink');
  var $vortLink = $('#vortlink');

  $symmLink.on('mouseenter', event =>{
    $("#symm").attr("src", "./pics/symmexample1a.jpg");
    
  });

  $vortLink.on('mouseenter', event =>{
    $("#symm").attr("src", "./pics/vortexjt.jpg");
  });  




/////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Unused scoring jQuery

//Scores change colour

  $score.on('click', event => {
    $(event.currentTarget).addClass('red-score');
    $(event.currentTarget).siblings().removeClass('red-score');
  })

  });

//Submit Button hides more info and displays message

var $voteDone = $('.vote-done');
var $scoreButton = $('.score-button');
var $undoButton = $('.undo-button');



$voteDone.hide();
 $scoreButton.on('click', event => {
   $(event.currentTarget).closest('.pic').find('.vote-done').show();
   $(event.currentTarget).closest('.pic').find('.more-info').hide();
   $(event.currentTarget).closest('.pic').find('.reveal-more').hide();
  }); 

//Undo Button restores more info and hides message

 $undoButton.on('click', event => {
   $(event.currentTarget).closest('.pic').find('.more-info').show();
   $(event.currentTarget).closest('.pic').find('.reveal-more').show();
   $(event.currentTarget).closest('.pic').find('.vote-done').hide();

*/







  }); 