/**
 * Created by Atinderpaul on 2017-06-28.
 */

var a = parseInt("0");
function menuAnimation(x) {
    if (a === parseInt("0")) {
        // x.classList.toggle("change");
        document.getElementById("left-sidebar").style.display = "none";
        document.getElementById("resume-content").style.marginLeft = "2.5%";
        document.getElementById("resume-content").style.width = "98%";
        a = parseInt("1");
    }
    else {
        a = parseInt("0");
        // x.classList.toggle("change");
        document.getElementById("left-sidebar").style.display = "block";
        document.getElementById("resume-content").style.marginLeft = "22.5%";
        document.getElementById("resume-content").style.width = "78%";
    }
}

function colorHover(color) {
    document.getElementById('bar1').style.backgroundColor = color;
    document.getElementById('bar2').style.backgroundColor = color;
    document.getElementById('bar3').style.backgroundColor = color;
}

function onBackHover()
{
    $("#back-pic").attr('src', 'img/back-dark.png');
}

function offBackHover()
{
    $("#back-pic").attr('src', 'img/back.png');
}

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    }
                });
            }
        }
    });