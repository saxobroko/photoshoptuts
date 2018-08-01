$(document).ready(function() {

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


  //Gallery

  const current = document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img');
  const opacity = 0.6;

  imgs[0].style.opacity = opacity;


//Function with img as argument- clicking an image will trigger a new function. 
//Happens for each img in the .imgs class. 
  imgs.forEach(img => img.addEventListener('click', imgClick));


//This new function uses event as an argument.
  function imgClick (event) {
    //The event taret has an img src, this src replaces that of the main image.
    current.src = event.target.src;
    //Opacity is reset, to avoid multiple opacity changes. You can call img within the loop anything (it's a variable)
    imgs.forEach(img => (img.style.opacity = 1));
    //Add .fade-in class
    current.classList.add('fade-in')
    //.fade-in only happens once, so we need to remove it after half a second
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //The event target opacty is changed to the number above.
    event.target.style.opacity = opacity;

    }  


});