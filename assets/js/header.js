function myFunction(eventID) {
    document.getElementById(eventID).classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.drop')) {
        var myDropdown = document.getElementById("practice");
        var myDD = document.getElementById("our-team");
        var myList = document.getElementById("career-list");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
        if (myDD.classList.contains('show')) {
            myDD.classList.remove('show');
        }
        if (myList.classList.contains('show')) {
            myList.classList.remove('show');
        }
    }
}