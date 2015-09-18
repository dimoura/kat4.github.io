/*jslint browser:true */

  var clickableElements = document.querySelectorAll('.clickable');

  function toggleClass(elementId, className) {
    elementId.classList.toggle(className);
  }
  function hasClass(ele,cls) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  function removeClass(ele,cls) {
          if (hasClass(ele,cls)) {
              var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
              ele.className=ele.className.replace(reg,' ');
          }
      }

      function clearAll() {
      	for (var i = 0; i < clickableElements.length; i++) 		{
          removeClass(clickableElements[i],'active');

          }
      }
       function clearAllProf() {
        	for (var i = 0; i < clickableElements.length; i++) 		{
            toggleClass(clickableElements[i],'not-act');

            }
        }

for (var i = 0; i < clickableElements.length; i++) {
  (function(index) {
    clickableElements[index].addEventListener('click', function() {
      if (hasClass(clickableElements[index], 'active')) {
        clearAll();
      } else {
        clearAll();
        toggleClass(clickableElements[index], 'active');
      }
      if (hasClass(clickableElements[index], 'profile-bio')) {
          clearAllProf();
          console.log('blah')
        }
    });
  }(i));
}
