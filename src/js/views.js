function modalWin(){
var btn1 = document.querySelector('.block-button__reader1'), 
 btn2 = document.querySelector('.block-button__reader2'),  
 btn3 = document.querySelector('.block-button__reader3'), 
 btn4 = document.querySelector('.block-button__reader4'), 
    modal1 = document.querySelector('.modal1'), 
     modal2 = document.querySelector('.modal2'),
      modal3 = document.querySelector('.modal3'),
       modal4 = document.querySelector('.modal4'),
    closeBtn1 = document.querySelector('.closeBtn1'), 
    closeBtn2 = document.querySelector('.closeBtn2'), 
    closeBtn3 = document.querySelector('.closeBtn3'), 
    closeBtn4 = document.querySelector('.closeBtn4'); 
btn1.addEventListener('click', function() {
    modal1.style.display = 'flex'; 
})
btn2.addEventListener('click', function() {
    modal2.style.display = 'flex'; 
})

btn3.addEventListener('click', function() {
    modal3.style.display = 'flex'; 
})

btn4.addEventListener('click', function() {
    modal4.style.display = 'flex'; 
})


closeBtn1.addEventListener('click', function () {
    modal1.style.display = "none";
})

closeBtn2.addEventListener('click', function () {
    modal2.style.display = "none";
})

closeBtn3.addEventListener('click', function () {
    modal3.style.display = "none";
})

closeBtn4.addEventListener('click', function () {
    modal4.style.display = "none";
})

} 


export {modalWin};