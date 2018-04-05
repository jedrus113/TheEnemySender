// shall be fist
var images_to_get = [];
var images = [];

function getImageFile(filename)
{
    var imgVar = document.createElement("img");
    imgVar.setAttribute("src", filename);
    return imgVar;
}

function didImagesLoad()
{
    for (var j = 0; j < images.length; j++)
        if (!images[j].complete) return false;
    return true;

}