(function () {
    document.querySelectorAll('form').forEach((i) => {
        i.addEventListener('submit', (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
        });
    });
})();
