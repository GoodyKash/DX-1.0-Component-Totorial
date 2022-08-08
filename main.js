document.getElementById('orangediv').style.background ="black"

// Method 1
document.getElementById('orangediv').style.background ="#87CEEB"

// ES 5

var seconddiv = document.getElementById('orangediv')

// Poping an alert when clicked

seconddiv.addEventListener('click',function(){
    alert('orange div is clicked')
})

// changing the element background
seconddiv.style.background = "blue"