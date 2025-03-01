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


// Dynamic Date Set
const date = new Date();
const dateSeparate = date.toDateString().split(" ");
document.getElementById("todayDate").innerHTML = `
<p class="text-xl">${dateSeparate[0]},</p>
<h3 class="text-xl font-semibold">${dateSeparate[1]} ${dateSeparate[2]} ${dateSeparate[3]}</h3>
`;


// Card Button Function
const completedBtns = document.getElementsByClassName('card-btn');
for(let button of completedBtns) {
    button.addEventListener('click', function() {
        alert('Board Updated Successfully');
        button.setAttribute("disabled", "");
        button.classList.add("opacity-40");
        const taskAssiged = document.getElementById('task-assiged').innerText;
        let convertTaskAssiged = parseInt(taskAssiged);
        document.getElementById('task-assiged').innerText = `0${convertTaskAssiged - 1}`;
        const taskDone = document.getElementById('task-done').innerText;
        let convertTaskDone = parseInt(taskDone);
        document.getElementById('task-done').innerText = convertTaskDone + 1;
    })
}

document.getElementById('clear-btn').addEventListener('click', function() {
    const messageChild = document.querySelectorAll('.message-child');
    for (const element of messageChild) {
        element.classList.add('hidden');
    }
})