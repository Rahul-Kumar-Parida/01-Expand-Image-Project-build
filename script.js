const mains = document.querySelectorAll(".main");

mains.forEach((main1) => {
  main1.addEventListener("click", () => {
    removeActiveClasses();
    main1.classList.add("active");

    //we are add active proprty for all div, that's why we use add property..
   
  });
});

function removeActiveClasses() {
  mains.forEach((main1) => {
    main1.classList.remove("active");
  });
}

//