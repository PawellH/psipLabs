//задание 1
let animationInterval;
const images = [...document.querySelectorAll("#slider img")];
function playAnimation() {
  const selectTime = document.querySelector("#selectTime");
  let iCurrentImg = 1;
  if (!selectTime.value) {
    return;
  }
  if (animationInterval) {
    clearInterval(animationInterval); 
    animationInterval = null;
    images.forEach(image => {
      image.style.opacity = "";
    });
    currentImageIngex = 1;
  }
  animationInterval = setInterval(() => {
    const iPrev = (iCurrentImg  - 1) % images.length;
    images[iPrev].style.opacity = 0;
    
    const iCurrent = iCurrentImg % images.length;
    images[iCurrent].style.transition = "all 1s";
    images[iCurrent].style.opacity = 1;
    iCurrentImg++;
  }, selectTime.value * 1000);
}

function resetAnimation() {
  if (animationInterval) {
    clearInterval(animationInterval); 
    animationInterval = null;
    images.forEach(image => {
      image.style.opacity = "";
    });
    currentImageIngex = 1;
  }
}

//задание 2
let displaySubmenu = false; 
window.onload = function(){
  //2.1
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener('mouseover', () => {
    menuBtn.style.border= "3px solid black";
    menuBtn.classList.add('open');
  });
  menuBtn.addEventListener('mouseout', () => {
    menuBtn.style.border= "";
    menuBtn.classList.remove('open');
  }); 
  //2.2
  const menuItems = document.querySelectorAll(".topmenu > li");
  menuItems.forEach(menuItem => {
    const submenu = menuItem.querySelector(".submenu");
    menuItem.addEventListener('click', () => {
      submenu.style.display = submenu.style.display === "none" ? "block" : "none";
    });
    menuItem.addEventListener("mouseleave", () => {
      submenu.style.display = "none";
    })
  });
}