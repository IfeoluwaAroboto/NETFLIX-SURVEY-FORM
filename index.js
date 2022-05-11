let thanksEl = document.getElementById("thanks-el")
const b = document.querySelector (".b")
thanksEl.addEventListener("click", function(){
    if (b.classList.contains("remove-b"))
    { b.classList.remove ("remove-b")

    }
    else {b.classList.add ("remove-b")}
}) 
    