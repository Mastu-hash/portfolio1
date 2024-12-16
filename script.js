const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

const menuIcon = document.getElementById("menu-icon");
const cancelIcon = document.getElementById("cancel-icon");

// Function to toggle menu visibility
function toggleMenu() {
  // Toggle visibility of the mobile menu
  mobileMenu.classList.toggle("hidden");

  // Toggle icons
  menuIcon.classList.toggle("hidden");
  cancelIcon.classList.toggle("hidden");
}

// Attach event listener to the menu button
menuBtn.addEventListener("click", toggleMenu);

// Close the menu when a menu option is clicked
const menuOptions = document.querySelectorAll("#mobile-menu a");

menuOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Hide the menu
    mobileMenu.classList.add("hidden");

    // Reset the icons
    menuIcon.classList.remove("hidden");
    cancelIcon.classList.add("hidden");
  });
});

// for resume section (menu)
// Menu buttons
const experienceBtn = document.getElementById("experience");
experienceBtn.addEventListener('click', () => {
  console.log('Button clicked!');
});
const educationBtn = document.getElementById("education");
const skillsBtn = document.getElementById("skills");
const aboutmeBtn = document.getElementById("aboutme");

// Content sections
const education = document.getElementById("education-info");
const experience = document.getElementById("experience-info");
const skills = document.getElementById("skills-info");
const aboutme = document.getElementById("aboutme-info");

// Arrays to manage buttons and sections
const sections = [education, experience, skills, aboutme];
const menuButtons = [educationBtn, experienceBtn, skillsBtn, aboutmeBtn];

// Utility function to hide all sections
const hideAllSections = () => {
sections.forEach((section) => section.classList.add("hidden"));
};

// Utility function to reset button colors
const resetMenuBtnColors = () => {
menuButtons.forEach((btn) => {
btn.classList.remove("bg-[#00FF99]"); // Remove active color
btn.classList.add("bg-[#28272C]"); // Add default color

//chang text color of btn
btn.classList.remove("text-[#28272C]")
btn.classList.add("text-white")
});
};

// Event listener handler
const handleButtonClick = (sectionToShow, activeBtn) => {
// Hide all sections
hideAllSections();

// Reset all button colors
resetMenuBtnColors();

// Show the clicked section
sectionToShow.classList.remove("hidden");

// Highlight the clicked button
activeBtn.classList.remove("bg-[#28272C]"); // Remove default color
activeBtn.classList.add("bg-[#00FF99]"); // Add active color

activeBtn.classList.remove("text-white")
activeBtn.classList.add("text-[#28272C]")//for changing the text color
};

// Attach event listeners to buttons
experienceBtn.addEventListener("click", () =>
handleButtonClick(experience, experienceBtn)
);

educationBtn.addEventListener("click", () =>
handleButtonClick(education, educationBtn)
);

skillsBtn.addEventListener("click", () =>
handleButtonClick(skills, skillsBtn)
);

aboutmeBtn.addEventListener("click", () =>
handleButtonClick(aboutme, aboutmeBtn)
);




