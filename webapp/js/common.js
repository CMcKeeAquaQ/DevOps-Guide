toggleCollapse();
loadContents();

function toggleCollapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
       }
      });
    }
}

function loadContents() {
  var contents = document.getElementById("contents");
  var htags = document.querySelectorAll("h3:not(#contents-h), h4, h5, h6");
  let contentsInner = '<ul>';

  htags.forEach((h, i) => {
    if(i > 0) {
      var currH = parseInt(h.tagName.replace('H',''));
      var prevH = parseInt(htags[i-1].tagName.replace('H',''));
      if(currH > prevH) {
        contentsInner += `<ul><li><a href="#section_${i}">${h.textContent}<a></li>`
      } else if(currH == prevH) {
        contentsInner += `<li><a href="#section_${i}">${h.textContent}<a></li>`
      } else {
        contentsInner += `</ul><li><a href="#section_${i}">${h.textContent}<a></li>`
      }
    } else {
      contentsInner += `<li><a href="#section_${i}">${h.textContent}<a></li>`
    }

    const originalHeadingContent = h.innerHTML;
    const anchor = `<a class="offset-anchor" id="section_${i}"></a>`;
    h.innerHTML = anchor + originalHeadingContent;
  })

  contentsInner += '</ul>'
  contents.innerHTML += contentsInner;

}