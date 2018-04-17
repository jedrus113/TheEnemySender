// shall be fist
var images = {};
var imageNames = {};
var loaddedSuccess = false;

function getImages(){
    getImageFile("images/studiologo.png", "logo");
}

function getImageFile(filename, name)
{
    var imgVar = document.createElement("img");
    imgVar.setAttribute("src", filename);
    images[name] = imgVar;
}

function didImagesLoad()
{
    for (var id in images){
        if (!images[id].complete){
            loaddedSuccess = false;
            return loaddedSuccess;
        }
    }
    loaddedSuccess = true;
    return loaddedSuccess;

}