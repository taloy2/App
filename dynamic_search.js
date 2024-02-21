const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Watermelon"
];

function search() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase();
    const resultsList = document.getElementById('resultsList');

    resultsList.innerHTML = '';

    const filteredData = data.filter(item => item.toLowerCase().includes(searchText));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });
}

document.getElementById('searchInput').addEventListener('input', search);
