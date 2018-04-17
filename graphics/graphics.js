// shall be fist
var images = [];
var imageNames = {};
var loaddedSuccess = false;

function getImages(){
    getImageFile("images/Stickman.png", "hero");
    getImageFile("images/evil.png", "evil");
    getImageFile("images/stop.jpg", "wait");
    getImageFile("images/boom.png", "boom");
}

function getImageFile(filename, name)
{
    var imgVar = document.createElement("img");
    imgVar.setAttribute("src", filename);
    imageNames[name] = images.length;
    images.push(imgVar);
}

function didImagesLoad()
{
    for (var j = 0; j < images.length; j++)
        if (!images[j].complete){
            loaddedSuccess = false;
            return loaddedSuccess;
        }
    loaddedSuccess = true;
    return loaddedSuccess;

}