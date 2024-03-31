

function callCustomMethod(){
    let event = new CustomEvent("Hello" , 
    {
        detail: {
        message: "World"
      }
    });

    document.dispatchEvent(event);
}


//Create a event listener to listen the above dispatched event
document.addEventListener("Hello", (event) => {
  console.log(event.detailclear);
});
