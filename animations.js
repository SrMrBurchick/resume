var elements = document.querySelectorAll(".animated-progress span");
elements.forEach(element => {
    const persentage = element.getAttribute("data-progress");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= Number(persentage)) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            element.textContent = persentage + "%";
        }
    }

});
