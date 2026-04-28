function enterSite() {
    document.getElementById('wall').classList.add('hidden');
}

function showPopup(id) {
    document.getElementById('popup' + id).classList.add('show');
}

function closePopup(id) {
    document.getElementById('popup' + id).classList.remove('show');
}