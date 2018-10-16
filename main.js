var index = 1;
var n;

showImage(1);
function plusindex(n) {
  /*index=index + 1;*/ // dong nay sai vl
  showImage((index += n)); // += n chu khong phai 1 vi no phai truyen tham so vao function
}

function currentSlide(n) {
  showImage((index = n));
}

function showImage(n) {
  var i;
  var z = document.getElementsByClassName("numberText");
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("dot");
  if (n > x.length) {
    index = 1;
  }

  if (n < 1) {
    index = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; //duyệt để cho tất cả các hình ẩn hết
    z[i].style.display = "none";
  }
  x[index - 1].style.display = "block"; //sau đó khi được bấm nút hình sẽ được hiện lên 1 hình chứ không hiện lên nhiều hình

  z[index - 1].style.display = "block";

  for (i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" active", "");
  }

  y[index - 1].className += " active";
}

showImageAuto();
function showImageAuto() {
  var i;
  var z = document.getElementsByClassName("numberText");
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("dot");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    z[i].style.display = "none";
  }
  if (index > x.length && index > y.length && index > z.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  z[index - 1].style.display = "block";

  for (i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" active", "");
  }

  y[index - 1].className += " active";

  index++;

  setTimeout(showImageAuto, 4000);
}

var dom = document.querySelectorAll(".slide");
dom.forEach(function(domElement) {
  //nodeList.forEach(callback[, thisArg]);

  //callback Function to execute for each element,
  //ThisArg Value to use as this when executing callback.
  domElement.addEventListener("click", onTouchStart);
  domElement.addEventListener("mousemove", onTouchMove);
});

function onTouchStart(e) {
  var x = e.clientX;
  var y = e.clientY;

  console.log(x);
  console.log(y);
}

function onTouchMove(e) {
  e.preventDefault();
  console.log("e");
}

function clicked() {
  alert("clicked");
  console.log("clicked");
}
