var canvas = new fabric.Canvas('mycanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object);
    })
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    var keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '87') {
        newimage('wall.jpg');
        console.log("w");
    }
    if (keyPressed == '71') {
        newimage('ground.png');
        console.log("g");
    }
    if (keyPressed == '76') {
        newimage('light_green.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        newimage('trunk.jpg');
        console.log("t");
    }
    if (keyPressed == '82') {
        newimage('roof.jpg');
        console.log("r");
    }
    if (keyPressed == '89') {
        newimage('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68') {
        newimage('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '85') {
        newimage('unique.png');
        console.log("u");
    }
    if (keyPressed == '67') {
        newimage('cloud.jpg');
        console.log("c");
    }
    if (keyPressed == "38") {
        up()
    }
    if (keyPressed == "40") {
        down()
    }
    if (keyPressed == "37") {
        left()
    }
    if (keyPressed == "39") {
        right()
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object)
        player_update()
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object)
        player_update()
    }
}
function left() {
    if (player_x >0) {
        player_x = player_x - block_image_width;
        canvas.remove(player_object)
        player_update()
    }
}
function right() {
    if (player_x <=850) {
        player_x = player_x + block_image_width;
        canvas.remove(player_object)
        player_update()
    }
}