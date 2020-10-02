let plus = document.querySelectorAll(".fa-plus");
console.log(plus);
let minus = document.querySelectorAll(".fa-minus");
console.log(minus);
let heart = document.querySelectorAll(".fa-heart-o");
console.log(heart);
let trash = document.querySelectorAll(".fa-trash-o");
console.log(trash);
let total = document.querySelector(".total-price");
console.log(total);
// add element
for(let i=0;i<plus.length;i++){
    let button=plus[i];
    button.addEventListener("click",function(){
        console.log('clicked');
        button.nextElementSibling.nextElementSibling.innerHTML++;
        total.innerHTML=
        parseFloat(total.innerHTML)+ parseFloat(
            button.parentElement.previousElementSibling.innerHTML) + "D";});
        }
// minus element
for(let i=0;i<minus.length;i++){
    let button=minus[i];
    button.addEventListener("click",function(){
        if(button.nextElementSibling.innerHTML>0)
        button.nextElementSibling.innerHTML--;
        if(parseFloat(total.innerHTML)>0){
            total.innerHTML=
            parseFloat(total.innerHTML)- parseFloat(
                button.parentElement.previousElementSibling.innerHTML) + "D";};
        });
    }
//remove elment
for(let i=0; i<heart.length; i++){
    let button=trash[i];
    button.addEventListener("click",function(){
        button.parentElement.parentElement.remove();
    }); 
}
//heart
for(let i=0; i<heart.length; i++){ 
    heart[i].addEventListener("click",function(){
        this.style.color='red';
        console.log('clicked');
    });

}