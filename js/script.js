function hideInitialPage(element) {
    initialPage = document.getElementById('initial-page');
    initialPage.style.display = 'none';
    imageSource = element.getElementsByTagName('img')[0].src;
    activeProfile = document.getElementById('active-profile').src = imageSource;
}