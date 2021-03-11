//задание 1
function playAnimation() {
  const selectTime = document.querySelector("#selectTime");
  const images = [...document.querySelectorAll("#slider img")];
  let animationInterval;
  let iCurrentImg = 1;
  if (!selectTime.value) {
    return;
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

//задание 2
//2.1
function animation_burger() {
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener('mouseover', () => {
    menuBtn.style.border= "3px solid black";
    menuBtn.classList.add('open');
  });
  menuBtn.addEventListener('mouseout', () => {
    menuBtn.style.border= "";
    menuBtn.classList.remove('open');
  });
}
window.requestAnimationFrame(animation_burger);
//2.2
function animation_menuLvls() {
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
window.requestAnimationFrame(animation_menuLvls);