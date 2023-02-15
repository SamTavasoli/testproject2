// Get the menu items
const menuItems = document.querySelectorAll('.sidebar-menu-right a');

// Get the sections
const sections = document.querySelectorAll('section');


// Get the offset of the sections from the top of the page
const sectionsOffsets = [];
for (let i = 0; i < sections.length; i++) {
  sectionsOffsets.push(sections[i].offsetTop);
}


function handleActiveMenuItem() {
    for (const item of menuItems) {
      item.classList.remove("active");
    }
  
    for (const section of sections) {
      if (window.scrollY >= section.offsetTop - 100 && window.scrollY < (section.offsetTop + section.offsetHeight)) {
        menuItems[Array.from(sections).indexOf(section)].classList.add("active");
        break;
      }
    }
  }

// Listen to the scroll event
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Loop through the sections and update the active class on the menu items
  for (let i = 0; i < sections.length; i++) {
    if (scrollPosition >= sectionsOffsets[i] && scrollPosition < sectionsOffsets[i + 1]) {
      menuItems[i].classList.add('active');
    } 
    else {
      menuItems[i].classList.remove('active');
    }
  }
});

window.addEventListener("scroll", handleActiveMenuItem);