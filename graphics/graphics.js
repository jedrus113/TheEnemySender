// shall be fist
var images = [];
var imageNames = {};
var loaddedSuccess = false;

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

function drawItem(item){
    gameCanvas2d.drawImage(images[imageNames[item.image]], item.position.x, item.position.y, item.size.x, item.size.y);
    if (item.health !== undefined){
        drawText(gameCanvas2d, "HP " + item.health, true, 20, item.position.x, item.position.y);
    }
}