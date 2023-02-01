let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("You clicked a button...");
    })
});