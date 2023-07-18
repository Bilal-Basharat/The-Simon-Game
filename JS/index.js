// array for adding random values
var array = [];

// // function for clicking the green button
// function greenButtonClicked(){

//     $('#greenButton').fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/green.mp3");
//     audio.play();
// }

// // function for clicking the red button
// function redButtonClicked(){

//     $('#redButton').fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/red.mp3");
//     audio.play();
// }

// // function for clicking the yellow button
// function yellowButtonClicked(){

//     $('#yellowButton').fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/yellow.mp3");
//     audio.play();
// }

// // function for clicking the blue button
// function blueButtonClicked(){

//     $('#blueButton').fadeOut(100).fadeIn(100);
//     const audio = new Audio("sounds/blue.mp3");
//     audio.play();
// }

// function for pressing button on start
document.addEventListener("keypress", function(){
    var random = Math.floor(Math.random() * 4) + 1;
    if(array.length === 0){
    array.push(random)

        if(random === 1){
            showAnimation('greenButton', '1')
        }else if(random === 2){
            showAnimation('redButton', '2')
        }else if(random === 3){
            showAnimation('yellowButton', '3')
        }else if(random === 4){
            showAnimation('blueButton', '4')
        }
    }
})


// buttons logic
var numberOfButtons = $(".block").length;

for (var i =0; i < numberOfButtons; i++){
    document.querySelectorAll(".block")[i].addEventListener("click", function(){
        
        showAnimation(this.id, this.value)
        const audio = new Audio('sounds/blue.mp3');
        audio.play();
        console.log('button is clicked')
    });
}

function showAnimation(buttonId){
    
    if(this.value == )
    switch(buttonId){
    
        case 'greenButton':
            $(".block1").fadeOut(100).fadeIn(100);
            var green = new Audio('sounds/green.mp3');
            green.play();
            break;

            case 'redButton':
            $(".block2").fadeOut(100).fadeIn(100);
            var green = new Audio('sounds/red.mp3');
            green.play();
            break;

            case 'yellowButton':
            $(".block3").fadeOut(100).fadeIn(100);
            var green = new Audio('sounds/yellow.mp3');
            green.play();
            break;

            case 'blueButton':
            $(".block4").fadeOut(100).fadeIn(100);
            var green = new Audio('sounds/blue.mp3');
            green.play();
            break;

            default:
                window.alert("Please click on the button");
    }
}