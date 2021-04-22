const backToTop = document.getElementById("back_to_top")

window.addEventListener("scroll",(event) => {

  if (window.scrollY > 200){
      backToTop.classList.add("appear");
  }

  else if (window.scrollY > 201){
    backToTop.classList.add("disappear");

  }

  else{
    
  }
  

})
