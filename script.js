const productsGrid = document.querySelector(".products-grid");

function calcularDesconto(precoAntigo, preco) {
    const desconto = ((precoAntigo - preco) / precoAntigo) * 100;

    return Math.round(desconto);
}

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

produtos.forEach(function(produto) {

    const card = document.createElement("article");

    card.classList.add("product-card");

    let informacaoPreco = "";

    if (produto.precoAntigo) {

        const desconto = calcularDesconto(
            produto.precoAntigo,
            produto.preco
        );

        informacaoPreco = `
            <p class="old-price">
                DE ${formatarPreco(produto.precoAntigo)}
            </p>

            <p class="price">
                ${formatarPreco(produto.preco)}
            </p>

            <span class="discount">
                ${desconto}% OFF
            </span>
        `;

    } else {

        informacaoPreco = `
            <p class="price">
                ${formatarPreco(produto.preco)}
            </p>

            ${produto.precoNormal ? `
                <p class="normal-price">
                    ${formatarPreco(produto.precoNormal)} em outras formas de pagamento
                </p>
            ` : ""}
        `;
    }

    card.innerHTML = `
        <div class="product-image">
            <img src="${produto.imagem}" alt="${produto.nome}">
        </div>

        <div class="product-info">

            <span class="product-category">
                ${produto.categoria}
            </span>

            <h3>${produto.nome}</h3>

            ${informacaoPreco}

            ${produto.cupom ? `
                <p class="coupon">
                    CUPOM: ${produto.cupom}
                </p>
            ` : ""}

            ${produto.parcelamento ? `
                <p class="installment">
                    ${produto.parcelamento}
                </p>
            ` : ""}

            ${produto.link ? `
                <a href="${produto.link}" class="product-button">
                    VER OFERTA
                </a>
            ` : ""}

        </div>
    `;

    productsGrid.appendChild(card);

});