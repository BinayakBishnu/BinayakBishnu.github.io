// if (typeof jQuery == "undefined") {
//     alert("JQuery not installed");
// }
// else {
//     alert("Jquery Installed");
//     prompt("What is your name?")
// }

$("#social_div").hover(
    function () {
        // alert('Hovering')
        $("#ids").fadeIn();
    },
    function () {
        $("#ids").fadeOut();
    }
)


// $("#linkedin_id").click(
//     function () {
//         alert('linkedin')
//     }
// )

$(".inner").on({
    mouseenter: function () {
        $(this).css(
            {
                "background-image": "none",
                "background-color": "rgba(119, 61, 253, 0.5)",
                "border-radius": "6px",
                // "color": "rgb(213, 200, 243)",
            }
        )
    },
    mouseleave: function () {
        $(this).css(
            {
                // "background-color": "rgba(119, 61, 253, 0.5)",
                "background-image": "linear-gradient(to left,rgba(119, 61, 253, 0.8),rgba(0,0,0,0))",
                "background-color": "rgba(0,0,0,0)",
                "border-radius": "2px",
                "color": "white",
            }
        ),
            $(".email").css(
                {
                    "background-color": "rgba(119, 61, 253, 0.8)",
                }
            )
    },
})