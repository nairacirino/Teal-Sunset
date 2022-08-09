// Adicionar/remover classe "active" na paginação para indicar a categoria selecionada

function showActive(selected) {
    var linksList = document.getElementById('categories-links');
    var linksArray = linksList.getElementsByTagName('a');
    for (i = 0; i < linksArray.length; i++) {
        linksArray[i].classList.remove("active");
    }
    selected.classList.add("active");
}

// Filtragem de categorias na galeria

function showSelectedCategorie(selected) {
    //recuperar classes do elemento clicado e transformar em array
    let classString = selected.className;
    let classArray = classString.split(" ");
    console.log(classArray);

    // recuperar descrições de cada categoria 
    var descriptionContainer = document.getElementById('categories-description');
    var descriptionsCollection = descriptionContainer.getElementsByTagName('p');

    // comparar classe clicada com as classes das categorias
    for (i = 0; i < descriptionsCollection.length; i++) {
        descriptionsCollection[i].classList.remove("hide");
        descriptionsCollection[i].classList.remove("show");
        console.log(descriptionsCollection[i].className)
        if (classArray[1] == descriptionsCollection[i].className) {
            descriptionsCollection[i].classList.add("show");
        } else {
            descriptionsCollection[i].classList.add("hide");
        }
    }

    //recuperar os projetos da galeria 
    

    // exibir os projetos na galeria
    for (i = 0; i < descriptionsCollection.length; i++) {
    if (classArray[1] == "all-projects") {

    }
    }
}

function pagination(selected) {
    showActive(selected);
    showSelectedCategorie(selected);
}

// Card-flip da galeria

function flipCard(x) {
    let card = document.getElementById(x);
    console.log(card);

    if (card.classList.contains('flip')) {
        card.classList.remove('flip');
    } else {
        card.classList.add('flip');
    }
}