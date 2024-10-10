document.addEventListener("DOMContentLoaded", () => {
    fetch('foods.json')
        .then(response => response.json())
        .then(foods => {
            const foodContainer = document.getElementById('food-container');
            foods.forEach(food => {
                const foodCard = document.createElement('div');
                foodCard.classList.add('food-card');
                foodCard.innerHTML = `
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                    <img src="${food.image}" alt="${food.name}">
                `;
                foodContainer.appendChild(foodCard);
            });
        });
});
