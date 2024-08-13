// fetch all items here

let btn = document.getElementById("order-btn");
let btn2 = document.querySelector(".sec-btn");
let result = document.getElementById("result");
let sadImg = document.querySelector(".sad-img");
let pizza = document.getElementById("pizza");

// function for promise

// all data set prefixing already in my dom
document.addEventListener('DOMContentLoaded',()=>{



  let pizzaRender=Math.floor(Math.random()*(10));
// console.log(pizzaRender);

// promise function 

function orderPizza(){
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{

      if(pizzaRender >5){
        resolve('Pizza has arrived! Enjoy your meal')
        btn.innerHTML="Deliverd..."
        btn.style.backgroundColor='green'
        btn.style.display='flex'
        btn.style.padding='0.8rem 2rem'
      }
      else{
        if(pizzaRender<5){
          reject("We couldn't deliver your pizza");
          btn.innerHTML='Pending...';
          btn.style.backgroundColor='#E4003A'
        btn.style.padding='0.8rem 2rem'


        }
      }

    },1000)

  })
}


   // for .then and .catch errors handling
function errorHandling(){

  orderPizza().then((Message) => {
    result.textContent = Message;
    pizza.classList.add("show");
    result.style.color = "#88D66C";
    btn2.style.display = "flex";
    btn.style.display="none"
  });

  orderPizza().catch((err) => {
    result.textContent = err;
    pizza.classList.remove("show");
    sadImg.style.opacity = 1;
    result.style.color = "#E4003A";
    btn2.style.display = "flex";
    

  });



}
    

  // event listener
function handler(){
  btn.addEventListener("click", () => {
    errorHandling();
    result.textContent = "Waiting for your pizza...";
    
   
  });
}
    
  
  // refresh function for all data refresh

  function refresh() {
    btn2.addEventListener("click", () => {
      window.location.reload();
      result.textContent=''
      btn.style.display='flex'
    });
  }
  refresh();

  handler()



})

 

