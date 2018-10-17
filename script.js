var showGame = (collection) => {
    // Main heading + memory
    $('body').add('<div class="collection">');
    $('body').append(`<h1>${collection.name}</h1>`);

    // the game
    collection.games.forEach((game) => {
        $('body').append(`
        <div class="jewel-container">
            <div class="jewel-edge"></div>
            <div class="jewel-cover" style="background-image: url('${game.image_case}')">
        </div>
        </div>
    `);
    });
}

$.getJSON('/games.json', (data) => {
    data.forEach((game) => {
        showGame(game);
    });
});