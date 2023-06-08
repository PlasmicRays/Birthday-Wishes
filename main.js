var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");


function new_image() {
    block_image_object.set({
        top: 0,
        left: 0
        canvas.add(block_image_object),
    });



}

function playSound() {

    x.play("myAudio");

}