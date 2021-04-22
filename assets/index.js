const backToTop = document.getElementById("back_to_top")
console.log(backToTop);

window.addEventListener("scroll",(event) => {
  console.log(window.scrollY)

  if (window.scrollY > 200){
      backToTop.classList.add("appear");
  }

  else if (window.scrollY > 201){
    backToTop.classList.add("disappear");

  }

  else{
    
  }
  

})
