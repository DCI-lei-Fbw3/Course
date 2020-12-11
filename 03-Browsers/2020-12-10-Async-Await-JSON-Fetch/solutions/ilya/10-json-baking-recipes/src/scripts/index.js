import recipes from './data.js';

Object.values(recipes).forEach(group =>
    Object.values(group).forEach(item => {
        document.getElementById(`${item.type}`).innerHTML += `
            <div class='card' style='width: 18rem'>
                <img src=${item.image} class="card-img-top" style='height: 12rem;'alt=${item.title}>
                <div class="card-body">
                    <h3 class="card-title">${item.title}</h3>
                    <h5 class="card-title">${item.author}</h5>
                    <hr style="margin: 0.5rem 0; background-color: black;>
                    <p class="card-text">${item.ingredients}</p>
                </div>
            </div>
        `;
    })
)
