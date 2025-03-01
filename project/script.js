// Simulate storing data in JSON
let storedData = [];

// Handle registration form submission
document.getElementById('registration-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const diagnosis = document.getElementById('diagnosis').value;

    const newData = { name, email, age, gender,diagnosis };

    // Save to simulated JSON data
    storedData.push(newData);

    // Store in localStorage as JSON string
    localStorage.setItem('storedData', JSON.stringify(storedData));

    // Clear form
    e.target.reset();
    alert('Registration successful!');
});

// Display data in table
document.getElementById('show-data')?.addEventListener('click', function () {
    const table = document.getElementById('data-table');
    const tbody = table.querySelector('tbody');

    // Retrieve data from localStorage
    const data = JSON.parse(localStorage.getItem('storedData')) || [];
    storedData = data; // Update in-memory storedData

    // Populate table
    tbody.innerHTML = '';
    data.forEach(item => {
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.age}</td>
            <td>${item.gender}</td>
                <td>${item.diagnosis}</td>
        </tr>`;
        tbody.innerHTML += row;
    });

    table.style.display = 'table';
});
