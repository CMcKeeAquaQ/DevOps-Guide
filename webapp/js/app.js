
// Remove active class from any active class buttons and add the active class to the button just clicked and load the relevant page
function toggleActive(elem) {
  var actv = document.getElementsByClassName("active");
  
  // Need to start from end first, as actv updates upon removal
  for (i = actv.length-1; i >= 0; i--) {
      actv[i].classList.remove("active");
  }

  // Add active class to button that was just pressed
  elem.classList.add("active");

  // If button is a subtopic, add active class to parent button as well
  if (elem.parentNode.className == "subnav-content") {
    elem.parentNode.parentElement.children[0].classList.add("active");
  }

  // Load the page that matches the id
  loadPage(elem.id);
}

// Load the page specified into the container div
function loadPage(page) {
  cont=document.getElementById("container");
  cont.innerHTML='<object id="div-content" type="text/html" data="html/'+ page +'.html" ></object>';
}