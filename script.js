console.log("script funcionando");
console.log(produtos);

const productsGrid = document.querySelector(".products-grid");

    produtos.forEach(function(produto) {

        const card = document.createElement("article");

    card.classList.add("product-card");

    card.innerHTML = `
        <div class="product-image">
            <img src="${produto.imagem}" alt="${produto.nome}">
        </div>

        <div class="product-info">
            <h3>${produto.nome}</h3>

            <p class="old-price">DE R$ ${produto.precoAntigo}</p>

            <p class="price">R$ ${produto.preco}</p>

            <a href="${produto.link}" class="product-button">
                VER OFERTA
            </a>
        </div>
    `;

    productsGrid.appendChild(card);

});