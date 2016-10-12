var tags = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
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