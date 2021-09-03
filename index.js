let spans = [document.querySelector(".toggler1"), document.querySelector(".toggler2"), document.querySelector(".toggler3")];
let hamb = document.querySelector(".hamb");

spans.map((span)=>{
    span.addEventListener("click", ()=>{
        spans.map((span)=>{
            span.classList.remove("encoded");
        })
        span.classList.add("encoded");
    })
})

hamb.addEventListener("click", ()=>{
    if (hamb.classList.contains("open")){
        hamb.classList.remove("open");
        document.querySelector(".overlay").style.display = "none";
    }
    else{
        hamb.classList.add("open");
        document.querySelector(".overlay").style.display = "block";
    }
})