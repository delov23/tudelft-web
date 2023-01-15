(function () {
    const filterBtn = document.querySelector('.filters-header > button');
    filterBtn.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach((f) => {
            const toAdd = f.classList.contains('open') ? 'closed' : 'open';
            const toRemove = toAdd === 'open' ? 'closed' : 'open';
            f.classList.add(toAdd);
            f.classList.remove(toRemove);
            
            // f.style.display =
            //     f.style.display === 'none' || f.style.display === ''
            //         ? 'flex'
            //         : 'none';
            // const toAdd = f.classList.contains('op-1') ? 'op-0' : 'op-1';
            // const toRemove = toAdd === 'op-0' ? 'op-1' : 'op-0';
            // f.classList.add(toAdd);
            // f.classList.remove(toRemove);
        });
        filterBtn.classList.toggle('upside-down');
    });
})();
