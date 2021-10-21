var showLogin = document.querySelector('#show-login');
var loginQa = document.querySelector('.login-qa')
showLogin.addEventListener('click',function(){
     if(loginQa.style.display === 'none'){
         loginQa.style.display = 'block'
     }else{
         loginQa.style.display = 'none'
     }
});
  var androidQa = document.querySelector('.android-qa');
  var subtopicAndroid = document.querySelector('.subtopic-android')
  var appleQa = document.querySelector('.apple-qa')
  var subtopicApple = document.querySelector('.subtopic-apple')
  var subtopicSocialnetwork = document.querySelector('.subtopic-socialnetwork')
  var socialnetworkQa = document.querySelector('.socialnetwork-qa')
   androidQa.addEventListener('click', function(){
       if (subtopicAndroid.style.display === 'none') {
        subtopicAndroid.style.display = 'block'
       }else{
        subtopicAndroid.style.display = 'none'
       }
   });

  appleQa.addEventListener('click', function(){
    if (subtopicApple.style.display === 'none') {
     subtopicApple.style.display = 'block'
    }else{
     subtopicApple.style.display = 'none'
    }
});

socialnetworkQa.addEventListener('click', function(){
    if (subtopicSocialnetwork.style.display === 'none') {
     subtopicSocialnetwork.style.display = 'block'
    }else{
     subtopicSocialnetwork.style.display = 'none'
    }
})


var exit = document.querySelector('.exit-res');
var wrapQa = document.querySelector('.wrap-qa');
console.log(wrapQa)
var navbar = document.querySelector('.navbar');
var iconNav = document.querySelector('.nav-res');
 exit.addEventListener('click',function(){
  wrapQa.style.display = 'none';
  navbar.style.display = 'block'
})
iconNav.addEventListener('click', function(){
  wrapQa.style.display = 'none';
  navbar.style.display = 'block'
})