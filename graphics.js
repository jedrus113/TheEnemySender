// shall be fist
var images = [];
var imageNames = {};

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
        if (!images[j].complete) return false;
    return true;

}