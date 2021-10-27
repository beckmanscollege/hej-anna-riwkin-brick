window.onload = function () {
     document.getElementById("myModal").style.display = "block";
};


document.ontouchmove = function(e) {
  e.preventDefault();
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//setTimeout(function() {
 //document.querySelector("#hem").scrollIntoView({
   // behavior: "smooth",
   //block: "center",
  //inline: "center"
 //});
//}, 100);

//window.addEventListener("wheel", e => e.preventDefault(), { passive: false });

let prevBlock = null;
let i = 0;

document.querySelectorAll(".block").forEach(block => {
  let inner = block.querySelector(".inner");
  inner.style.setProperty("--color", getColor());
  //block.style.top = i * 10 + "%";
  //block.style.marginLeft = i * 2 + "%";
  inner.onclick = () => {
    block.classList.add("active");
    block.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
    if (prevBlock !== null) prevBlock.classList.remove("active");
    prevBlock = block;
  };
  i++;
});

function getColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function data1() {
  document.getElementById("body").style.backgroundColor = "#3C291E";
}

function data2() {
  document.getElementById("body").style.backgroundColor = "#836A44";
}

function data3() {
  document.getElementById("body").style.backgroundColor = "#302F90";
}

function data4() {
  document.getElementById("body").style.backgroundColor = "#302F90";
}

function data5() {
  document.getElementById("body").style.backgroundColor = "#F5630F";
}

function data6() {
  document.getElementById("body").style.backgroundColor = "#3C291E";
}


//#8A8AFE LILA


// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}