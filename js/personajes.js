fetch("https://hp-api.onrender.com/api/characters")

.then(response => response.json())


.then(data => {
const $grid = document.querySelector(".grid");
data.forEach(character => {
if (character.image) {
const card = document.createElement("div");
card.classList.add("card");

let estado;
if (character.alive === true) {
estado = "Vivo";
} else {
estado = "Muerto";
}

card.innerHTML = `
<img src="${character.image}" alt="${character.name}">
<div class="card-content">
<h3>${character.name}</h3>
<p><strong>Especie:</strong> ${character.species}</p>
<p><strong>Intérprete:</strong> ${character.actor}</p>
<p><strong>Estado:</strong> ${estado}</p>
</div>
`;
$grid.appendChild(card);
}
});
})


.catch(error => {
console.error("Algo salió mal:", error);
});

