/** */
/**
 * add class usibg toogle
 * if class doesn't already exist insert class otherwhise take off
 */
 function sayHello() {
    //make list visible or not
    let list = document.querySelectorAll("li");
  
    list.forEach((li) => {
      li.classList.toggle("active");
    });
  
    //add class to rotate hamburger lines
    let ham = document.querySelectorAll(".hamburger");
  
    for (let index = 0; index < ham.length; index++) {
      if (index == 1) {
        ham[index].classList.toggle("displaynone");
      } else {
        ham[index].classList.toggle("close");
      }
    }
  }
  