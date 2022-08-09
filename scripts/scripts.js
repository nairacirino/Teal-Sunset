// Adicionar/remover classe "active" na paginação para indicar a categoria selecionada

function showActive(tag) {
    console.log(tag);
    var linksList = document.getElementById('categories-links');
    var linksArray = linksList.getElementsByTagName('a');
    for (i = 0; i < linksArray.length; i++) {
        linksArray[i].classList.remove("active");
    }
    tag.classList.add("active");
}

function showSelected(x) {
    var itemsList = document.getElementById('gallery');
    var itemsArray = itemsList.getElementsByTagName('figure');

    console.log(x);
    console.log(itemsList);
    console.log(itemsArray);
}