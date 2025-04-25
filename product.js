var closenav=document.getElementById("closenav")
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%" 
})

var search=document.getElementById("search")
var productcontainer=document.getElementById("productcontainer")
var productlist=productcontainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredvalue= event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count++)
    {
        var productitem=productlist[count].querySelector("h1").textContent

        if(productitem.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})