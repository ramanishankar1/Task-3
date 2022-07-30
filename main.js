var btns=document.querySelectorAll(".cal");
btns.forEach(btn);
function btn(multi){
    multi.addEventListener('click',calculate)
    
}
function calculate(){
     var uprice=this.parentNode.previousElementSibling.previousElementSibling.firstChild.value
    var qty=this.parentNode.previousElementSibling.firstChild.value;
    var price=uprice*qty;
    console.log(price);
    let a=this.parentNode.nextElementSibling.firstChild;
    a.value=price;  

}