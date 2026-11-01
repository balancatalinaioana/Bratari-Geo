fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById("gallery");

        data.bracelets.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;

            gallery.appendChild(card);
        });
    });
