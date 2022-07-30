var myImage = document.querySelector('img');

var holosrc = 'My%20test%20page_files/200px-Holo_Infobox.jpg';
var foxsrc = 'My%20test%20page_files/firefox-icon.png';
var lastImagesrc = localStorage.getItem('imgsrc');

if (lastImagesrc) {
    myImage.setAttribute('src', lastImagesrc);
    }

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === foxsrc) {
        myImage.setAttribute('src', holosrc);
        localStorage.setItem('imgsrc', holosrc);
    } else {
        myImage.setAttribute('src', foxsrc);
        localStorage.setItem('imgsrc', foxsrc);
    }

    
}

myButton = document.querySelector('button');
myHeading = document.querySelector('h1');




function setUserName () {
    var newUserName = prompt("Enter a username");
    localStorage.setItem('name', newUserName);
    myHeading.textContent = 'Mozilla is cool, ' + newUserName;
}

myButton.onclick = function () {
    setUserName();
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}