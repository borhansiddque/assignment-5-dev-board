// Challenge Part - Body Background Color Changed
document.getElementById('color-change-btn').addEventListener('click', function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// Go Blog Page
document.getElementById('go-blogs-page').addEventListener('click', function () {
    window.location.href = "./blog.html";
});


// Set Dynamic Date
let todayDate = new Date();
let setTodayDate = todayDate.toDateString();
let todayDateContainer = document.getElementById('today-date');
todayDateContainer.innerText = setTodayDate;
const dayName = todayDate.toDateString().split(" ")[0];
const todayDay = document.getElementById('todayDay');
todayDay.innerText = dayName;
const monthDateYear = todayDate.toDateString().split(" ");
const shiftMonthDateYear = monthDateYear.shift();
todayDateContainer.innerText = monthDateYear;



const completedBtns = document.getElementsByClassName('card-btn');

for(let button of completedBtns) {
    button.addEventListener('click', function() {
        alert('Board Updated Successfully');
        button.setAttribute("disabled", "");
        button.classList.add("opacity-40");
        const taskAssiged = document.getElementById('task-assiged').innerText;
        let convertTaskAssiged = parseInt(taskAssiged);
        document.getElementById('task-assiged').innerText = `0${convertTaskAssiged - 1}`;
        
        
    })
}
