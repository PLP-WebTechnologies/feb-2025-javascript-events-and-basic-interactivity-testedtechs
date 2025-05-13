document.getElementById('actionButton').addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById('hoverBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});
document.getElementById('hoverBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightgray';
});

document.getElementById('keypressInput').addEventListener('keypress', function(e) {
    console.log('Key pressed:', e.key);
});

let secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', function() {
    alert('Double-click detected!');
});

let pressTimer;
secretButton.addEventListener('mousedown', function() {
    pressTimer = setTimeout(() => alert('Long press detected!'), 1000);
});
secretButton.addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
});

function openTab(tabName) {
    let contents = document.getElementsByClassName('tabcontent');
    for (let content of contents) content.style.display = 'none';
    document.getElementById(tabName).style.display = 'block';
}

document.getElementById('sampleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email.includes('@')) {
        alert('Invalid email format');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    alert('Form submitted successfully!');
});
