function filter(language) {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        if (character.dataset.language === language) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none';
        }
    });
}

function selectCharacter(character) {
    window.location.href = `page.html?character=${character}`;
}
