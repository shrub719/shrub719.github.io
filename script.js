currentSection = "about"

function switchSection(section) {
    document.getElementById(`l-${currentSection}`).classList.remove("active");
    document.getElementById(`c-${currentSection}`).classList.remove("active");
    currentSection = section;
    document.getElementById(`l-${currentSection}`).classList.add("active");
    document.getElementById(`c-${currentSection}`).classList.add("active");
}