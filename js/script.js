// Challenge Part - Body Background Color Changed
document.getElementById('color-change-btn').addEventListener('click', function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});