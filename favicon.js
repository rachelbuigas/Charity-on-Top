(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.charityontop.org/assets/uploads/favicon.ico?v=2';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

