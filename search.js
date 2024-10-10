document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Evento para cuando se escribe en el campo de búsqueda
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
        searchResults.innerHTML = ''; // Limpiar resultados previos

        if (searchTerm.length > 0) { // Buscar solo si hay al menos una letra ingresada
            fetch('foods.json')
                .then(response => response.json())
                .then(foods => {
                    // Filtrar comidas que comiencen con la letra o coincidencias parciales
                    const filteredFoods = foods.filter(food => food.name.toLowerCase().startsWith(searchTerm));
                    
                    if (filteredFoods.length > 0) {
                        // Mostrar los resultados filtrados
                        filteredFoods.forEach(food => {
                            const resultCard = document.createElement('div');
                            resultCard.classList.add('food-card');
                            resultCard.innerHTML = `
                                <h3>${food.name}</h3>
                                <p>${food.description}</p>
                                <img src="${food.image}" alt="${food.name}">
                            `;
                            searchResults.appendChild(resultCard);
                        });
                    } else {
                        // Si no hay coincidencias
                        searchResults.innerHTML = `<p>No se encontraron resultados para "${searchTerm}".</p>`;
                    }
                });
        }
    });

    // Evento para búsqueda al hacer clic en el botón
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
        searchResults.innerHTML = ''; // Limpiar resultados previos

        fetch('foods.json')
            .then(response => response.json())
            .then(foods => {
                // Filtrar comidas que coincidan con la búsqueda
                const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchTerm));

                if (filteredFoods.length > 0) {
                    // Mostrar los resultados filtrados
                    filteredFoods.forEach(food => {
                        const resultCard = document.createElement('div');
                        resultCard.classList.add('food-card');
                        resultCard.innerHTML = `
                            <h3>${food.name}</h3>
                            <p>${food.description}</p>
                            <img src="${food.image}" alt="${food.name}">
                        `;
                        searchResults.appendChild(resultCard);
                    });
                } else {
                    // Si no hay coincidencias
                    searchResults.innerHTML = `<p>No se encontraron resultados para "${searchTerm}".</p>`;
                }
            });
    });
});
