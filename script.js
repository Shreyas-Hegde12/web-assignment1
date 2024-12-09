window.onload = function() {
    alert('Welcome to my personal website!');
};
document.addEventListener('DOMContentLoaded', function() {
    var colorButton = document.createElement('button');
    colorButton.id = 'change-color';
    colorButton.textContent = 'Change Background Color';
    document.body.appendChild(colorButton);

    colorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
    });
});
