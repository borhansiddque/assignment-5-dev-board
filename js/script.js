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
let date = new Date();
let setTodayDate = date.toDateString();
let todayDateContainer = document.getElementById('today-date');
todayDateContainer.innerText = setTodayDate;
const dayName = date.toDateString().split(" ")[0];
let todayDay = document.getElementById('todayDay');
todayDay.innerText = dayName;
const monthDateYear = date.toDateString().split(" ");
const shiftMonthDateYear = monthDateYear.shift();
todayDateContainer.innerText = monthDateYear;




// Get the current date
const today = new Date();

// Formatting options
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

// Format the date
const formatted = today.toLocaleDateString('en-US', options).replace(',', '');

// Split the date into parts
const parts = formatted.split(' ');

// Display the formatted date in the p tag
document.getElementById('formattedDate').innerHTML = `<span>${parts[0]},</span> <strong>${parts.slice(1).join(' ')}</strong>`;




