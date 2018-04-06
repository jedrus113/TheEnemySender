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

function drawItem(item){
    gameCanvas2d.drawImage(images[imageNames[item.image]], item.position.x, item.position.y, item.size.x, item.size.y);
}