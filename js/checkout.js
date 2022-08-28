// const enchanter = new Enchanter('registration');

let currentIndex = 0;
let arrayLi = $("#registration .nav .nav-link");
let prevStep = $(".prev-step");
let nextStep = $(".next-step");

function nextElement() {
    
    currentIndex++;

    if (currentIndex == arrayLi.length - 1) {
      nextStep.attr("disabled", "disabled");
      let currentElement = arrayLi[currentIndex];
      currentElement.classList.add("active2");
    } else {
      prevStep.removeAttr("disabled");
      let currentElement = arrayLi[currentIndex];
      currentElement.classList.add("active2");
    }
  }

  function prevElement() {
    if (currentIndex == 1) {
      prevStep.attr("disabled", "disabled");
      let currentElement = arrayLi[currentIndex];
      currentElement.classList.remove("active2");
      currentIndex--;
    } else {
      let currentElement = arrayLi[currentIndex];
      currentElement.classList.remove("active2");
      nextStep.removeAttr("disabled");
      currentIndex--;
    }
  }

const wizard = new Enchanter('registration', {}, {
    onNext: () => {
     nextElement()
    },
    onPrevious: () => {
      prevElement()
    },
    onFinish: () => {
      
    },
  });

 
  