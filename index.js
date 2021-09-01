let spans = [document.querySelector(".span1"), document.querySelector(".span2"), document.querySelector(".span3")]

spans.map((span)=>{
    span.addEventListener("click", ()=>{
        spans.map((span)=>{
            span.classList.remove("encoded");
        })
        span.classList.add("encoded");
    })
})



