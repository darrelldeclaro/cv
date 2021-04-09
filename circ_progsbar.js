const numb = document.querySelectorAll(".percentText");
const element = document.querySelectorAll(".right");

let n = numb.length;
let i;

function skill0() {
let counter = 0;
    setInterval(()=> {
        if(counter == 100) {
            clearInterval();
        } else {
            counter++;
            numb[0].textContent = counter + "%";
        }
    }, 38);
}

function skill1() {
    let counter = 0;
        setInterval(()=> {
            if(counter == 80) {
                clearInterval();
            } else {
                counter++;
                numb[1].textContent = counter + "%";
                element[1].classList.add("left1");
                element[1].classList.add("right1");
            }
        }, 47);
}

function skill2() {
        let counter = 0;
            setInterval(()=> {
                if(counter == 50) {
                    clearInterval();
                } else {
                    counter++;
                    numb[2].textContent = counter + "%";
                    element[2].classList.add("left2");
                    element[2].classList.add("right2");
                }
            }, 38);
}

function skill3() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 90) {
              clearInterval();
          } else {
              counter++;
              numb[3].textContent = counter + "%";
              element[3].classList.add("left3");
              element[3].classList.add("right3");
          }
      }, 45);
}

function skill4() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 50) {
              clearInterval();
          } else {
              counter++;
              numb[4].textContent = counter + "%";
              element[4].classList.add("left4");
              element[4].classList.add("right4");
          }
      }, 60);
}

function skill5() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 50) {
              clearInterval();
          } else {
              counter++;
              numb[5].textContent = counter + "%";
              element[5].classList.add("left5");
              element[5].classList.add("right5");
          }
      }, 60);
}

function skill6() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 50) {
              clearInterval();
          } else {
              counter++;
              numb[6].textContent = counter + "%";
              element[6].classList.add("left6");
              element[6].classList.add("right6");
          }
      }, 60);
}

function skill7() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 50) {
              clearInterval();
          } else {
              counter++;
              numb[7].textContent = counter + "%";
              element[7].classList.add("left7");
              element[7].classList.add("right7");
          }
      }, 60);
}

function skill8() {
  let counter = 0;
      setInterval(()=> {
          if(counter == 50) {
              clearInterval();
          } else {
              counter++;
              numb[8].textContent = counter + "%";
              element[8].classList.add("left8");
              element[8].classList.add("right8");
          }
      }, 60);
}

skill0();
skill1();
skill2();
skill3();
skill4();
skill5();
skill6();
skill7();
skill8();