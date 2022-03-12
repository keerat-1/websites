// console.log("jai ho");

let leftslider = document.getElementById('leftslider'); //Getting leftslider

let opennav = document.getElementById('openbtn');  // This button will open nav

let closenav = document.getElementById('closebtn');  // This button will close nav

let logo = document.getElementById('logo');

opennav.addEventListener('click', function myFunction(x) {
    opennav.style.display = "none";
    closenav.style.display = "block";
    if (x.matches) { // If media query matches
        leftslider.style.width = "50%";
    }
    else {
        leftslider.style.width = "25%";
    }


    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x)
})

closenav.addEventListener('click', function () {
    leftslider.style.width = "0vw";

    opennav.style.display = "block";
    closenav.style.display = "none";

})


// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }

//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes


// leftslider.style.width = "50%";
