// Body Background Color Changed
document.getElementById('color-change-btn').addEventListener('click', function () {
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


// function for Current Time
function currentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
}

// Card Button Function
const completedBtns = document.getElementsByClassName('card-btn');
const cardTitle = document.getElementsByClassName("card-title");

for (let i = 0; i < completedBtns.length; i++) {
    const button = completedBtns[i];
    button.addEventListener('click', function () {
        const taskAssiged = document.getElementById('task-assiged').innerText;
        let convertTaskAssiged = parseInt(taskAssiged);

        // Alert Message Show
        if (convertTaskAssiged !== 1) {
            alert('Board Updated Successfully');
        } else {
            alert('Board Updated Successfully');
            alert('Congrates!!! You have completed all the current task');
        }

        button.setAttribute("disabled", "");
        button.classList.add("opacity-40");
        button.classList.add('cursor-not-allowed')

        document.getElementById('task-assiged').innerText = `0${convertTaskAssiged - 1}`;
        const taskDone = document.getElementById('task-done').innerText;
        let convertTaskDone = parseInt(taskDone);
        document.getElementById('task-done').innerText = convertTaskDone + 1;

        // Task Completed Message
        let presentTime = currentTime();
        const currentCardTitle = cardTitle[i].innerText;
        messageContainer = document.getElementById("message-container");
        let div = document.createElement("div");
        div.innerHTML = `
            <p class="p-3 mt-4 message-child font-medium">
                You have Complete The Task ${currentCardTitle} at ${presentTime}
            </p>
        `;
        div.classList.add('bg-[#f4f7ff]');
        messageContainer.appendChild(div);
    })
}


// History Clear Button Function
document.getElementById('clear-btn').addEventListener('click', function () {
    const messageChild = document.querySelectorAll('.message-child');
    for (const child of messageChild) {
        child.classList.add('hidden');
    }
})




