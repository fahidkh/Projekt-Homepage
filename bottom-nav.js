var BottomNav = /** @class */ (function () {
    function BottomNav(items) {
        this.items = items;
    }
    BottomNav.prototype.render = function () {
        var nav = document.createElement('nav');
        nav.classList.add('bottom-nav');
        this.items.forEach(function (item) {
            var a = document.createElement('a');
            a.textContent = item.label;
            a.href = item.link;
            nav.appendChild(a);
        });
        document.body.appendChild(nav);
    };
    return BottomNav;
}());
var bottomNav = new BottomNav([
    { label: 'Home', link: 'index.html' },
    { label: 'About', link: 'about.html' },
    { label: 'References', link: 'references.html' },
]);
bottomNav.render();
