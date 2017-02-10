$("h3").on("click", function () {
    $("h3").each(function () {
        $(this).css("backgroundColor", "");
    });

    $(this).css("backgroundColor", "lightgrey");

    $("#News, #Tips, #Rules, #Donts, #Other, #Squads").hide();
    var name = $(this).data("name");
    $("#" + name).show();

    var offset = $('#' + name).offset().top;
    var docheight = $(document).height();

    if (offset >= (docheight - $(window).height())) {
        offset = docheight - $(window).height();
    }
    $("html, body").stop();
    $("html, body").animate({ scrollTop: offset }, 1000);
});

function pageTop() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
}

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("#TOP").show();
    }
    else {
        $("#TOP").hide();
    }
});