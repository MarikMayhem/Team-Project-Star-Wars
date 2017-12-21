
//take firebase informtion
function contentCharacters(){

    let requestURL = 'https://star-wars-334ba.firebaseio.com/planets.json';
    $.ajax({
        url:requestURL,
        success:renderCharacters
    });
}

// render all characters
function renderCharacters(content){

    let sectionContent = $('<section class="wrapper row">');

    $('.container-content')
        .append($('<h1>PLANETS</h1>'))
        .append(sectionContent);

    for(let key in content){
        let character = content[key];
        renderCharacter(character);

    }
}

function renderCharacter(character){
    let name = character['name'];

    let containerDiv = $('<div class="characters col-sm-6 col-md-4 col-lg-3">');
    let img = $('<img src="planets/' + name + '.png" alt="">');
    let contentName = $('<h3 class="name">' + name + '</h3>');

    containerDiv
        .append(img)
        .append(contentName);

    containerDiv
        .appendTo($('.wrapper'));
}


contentCharacters();
