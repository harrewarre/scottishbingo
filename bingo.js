var tags = [
    "*Talks about politics*",
    "Give 'em a good seeing to",
    "Raw skill and gamesense",
    "RNG manipulation",
    "Coming in big",
    "I'm fine/dead, wait I'm not fine/dead",
    "Keeps you young, keeps you fresh",
    "*Demon voice*",
    "Bull-fucking-shit",
    "That's gonna be a tough one",
    "Fuck this game",
    "*Forgets to pick up something important*",
    "*VapeNation*",
    "*\"Go fuck yourself\" picture*",
    "Fuck you chat",
    "*Dad story*",
    "*Robbie story*",
    "Don't mind if I do",
    "*Mentions that insurance policies are scams*",
    "I'll give you a *blank*",
    "*makes effeminate voice / yell / noise*",
    "Don't fuck with the shit",
    "gee fucking gee",
    "OH COME ON GAME",
    "*Mentions GonadBot*"
];

$(".toggle").on("click", function () {
    var input = $(this).closest(".cell").find("input");
    if (!input.is(":checked")) {
        input.prop("checked", true);
        input.prop('disabled', true);
    }
});

$("#reset").on("click", function () {
    $(".board input").prop("checked", false).prop('disabled', false);
    randomizeBoard();
});

function randomizeBoard() {
    var boardTags = tags.slice(0);
    var toggles = $(".toggle");

    for (var i = 0; i < toggles.length; i++) {
        var textIndex = Math.floor(Math.random() * boardTags.length);

        $(toggles[i]).text(boardTags[textIndex]);
        boardTags.splice(textIndex, 1);
    }
}

randomizeBoard();