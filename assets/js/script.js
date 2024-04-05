let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    document.querySelector('.header-home').style.position = "sticky";
    document.querySelector('.header-home').style.backgroundColor = "#fff";
    document.querySelector('.header-home').style.boxShadow = "0 0 3px 0 #7e7e7e7a";
    

} else {
   // Scrolling up
   document.querySelector('.header-home').style.position = "inherit";
   document.querySelector('.header-home').style.backgroundColor = "unset";
   document.querySelector('.header-home').style.boxShadow = "none";
}
});



// Drop Down 
const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(e) {
  const svgicon = e.target;
  const parentOfTarget = svgicon.parentNode; // li

  dropdowns.forEach((dropdown) => {
    if (dropdown !== parentOfTarget && !dropdown.contains(parentOfTarget)) {
      dropdown.classList.remove("show-dropdown");
      console.log("hello");
    }
  });

  if (parentOfTarget) {
    parentOfTarget.classList.toggle("show-dropdown");
  }
}

dropdowns.forEach((dropdown) => {
  dropdown.querySelector('svg').addEventListener("click", toggleDropdown);
});

// Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (![...dropdowns].some((dropdown) => dropdown.contains(e.target))) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show-dropdown");
    });
  }
});




// accordion code
const detailsElements = document.querySelectorAll("details");
const summaryElements = document.querySelectorAll("summary");
summaryElements.forEach((summary, index) => {
  summary.addEventListener("click", () => {
    // Close other open details elements and remove 'active' class
    detailsElements.forEach((details, i) => {
      if (i !== index) {
        details.open = false;
      }
    });
    summaryElements.forEach((s, i) => {
      if (i !== index) {
        s.classList.remove("actives");
      }
    });
    // Toggle 'active' class on the clicked summary
    summary.classList.toggle("actives");
  });
});



// tableofcontent hide and show with effects
document.addEventListener("DOMContentLoaded", function () {
  const tableHeader = document.querySelector(".toc-header");
  const tableCrossBtn = document.querySelector(".toc-cross");
  const tableOfcontentBody = document.querySelector(".tableofcontent ul");
  // Function to check if it's a mobile device
  function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the width as needed
  }
  // Function to hide table of content on mobile devices
  function hideTableOfContentOnMobile() {
    if (isMobileDevice()) {
      tableOfcontentBody.classList.add("hidden");
      tableCrossBtn.style.transform = "rotate(270deg)";
    }
  }
  // Initial check to hide on page load if it's a mobile device
  hideTableOfContentOnMobile();
  tableHeader.addEventListener("click", function () {
    if (tableOfcontentBody.classList.contains("hidden")) {
      tableOfcontentBody.classList.remove("hidden");
      tableCrossBtn.style.transform = "rotate(0deg)";
    } else {
      tableOfcontentBody.classList.add("hidden");
      tableCrossBtn.style.transform = "rotate(270deg)";
    }
  });
  // Check on window resize to adjust visibility
  window.addEventListener("resize", hideTableOfContentOnMobile);
});
// tableofcontent hide and show with effects end




let searchIcon = document.querySelector(".search-icon");
let searchForm = document.querySelector(".search-form");
let svg1 =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
let svg2 =
  '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512" fill="##000"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let isSvg1 = true;
searchIcon.addEventListener("click", function () {
  searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
  isSvg1 = !isSvg1;

  searchForm.classList.toggle("search-bar-show");
});


function toggleButtons() {
  const toggleBtn = document.querySelector(".toggle-slide-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const headerUl = document.querySelector("header ul");
  const mainTag = document.querySelector("main"); // Selecting the main tag

  headerUl.classList.toggle("show-ul");
  toggleBtn.style.display =
    toggleBtn.style.display === "none" ? "block" : "none";
  cancelBtn.style.display =
    cancelBtn.style.display === "block" ? "none" : "block";

  mainTag.classList.toggle("inactive"); // Toggling the "inactive" class on the main tag
}
const toggleBtn = document.querySelector(".toggle-slide-btn");
const cancelBtn = document.querySelector(".cancel-btn");
toggleBtn.addEventListener("click", toggleButtons);
cancelBtn.addEventListener("click", toggleButtons);


document.addEventListener("click", function (event) {
  const header = document.querySelector("header");
  const headerUl = document.querySelector("header ul");
  const toggleBtn = document.querySelector(".toggle-slide-btn");
  const mainTag = document.querySelector("main"); // Selecting the main tag
  const cancelBtn = document.querySelector(".cancel-btn"); // Selecting the cancel button

  if (!header.contains(event.target)) {
    headerUl.classList.remove("show-ul");
    if (toggleBtn.style.display === "none") {
      toggleBtn.style.display = "block";
    }
    mainTag.classList.remove("inactive"); // Remove the "inactive" class from the main tag
    cancelBtn.style.display = "none"; // Hide the cancel button
  }
});


// Scroll top btn
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", topFunction);






// toggle sidebar code
// function toggleButtons() {
//   const toggleBtn = document.querySelector(".toggle-slide-btn");
//   const cancelBtn = document.querySelector(".cancel-btn");
//   const headerUl = document.querySelector("header ul");
//   headerUl.classList.toggle("show-ul");
//   toggleBtn.style.display =
//     toggleBtn.style.display === "none" ? "block" : "none";
//   cancelBtn.style.display =
//     cancelBtn.style.display === "block" ? "none" : "block";
// }

// let isPast200px = false;
// window.addEventListener("scroll", function () {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//   if (currentScroll > 50) {
//     if (!isPast200px) {
//       // Scrolled beyond 200px
//       document.querySelector("header").style.backgroundColor = "#fff"; // Change to the desired color
//       isPast200px = true;
//     }
//   } else {
//     // Scrolled within the first 200px
//     if (isPast200px) {
//       document.querySelector("header").style.backgroundColor = "transparent"; // Change to the desired color
//       isPast200px = false;
//     }
//   }
// });


// header code ul li with toggle
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdowns = document.querySelectorAll("header ul li");

//   function toggleDropdown(e) {
//     var dropdownParent = e.currentTarget;
//     dropdowns.forEach(function (dropdown) {
//       if (dropdown !== dropdownParent) {
//         dropdown.classList.remove("showMenu");
//       }
//     });
//     dropdownParent.classList.toggle("showMenu");
//   }
//   dropdowns.forEach(function (dropdown) {
//     dropdown.addEventListener("click", toggleDropdown);
//   });
// });
