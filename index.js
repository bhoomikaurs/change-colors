// var color = 'white'
// function change() {
//     if (color == 'black')
//         color = 'white'
//     else
//         color = 'black'
//     document.querySelector('body').style.backgroundColor = color
// }
var colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
var index = 0
function change() {
    document.querySelector('body').style.backgroundColor = colors[index]
    document.querySelector('h1').innerHTML = index
    index++
    if (index > colors.length) {
        index = 0
        alert('starting from violet')
    }

}
