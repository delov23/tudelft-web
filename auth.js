(function () {
    const accountCustomer = document.querySelector('.account-customer');
    const accountSeller = document.querySelector('.account-seller');

    accountCustomer.addEventListener('click', (ev) => {
        accountCustomer.classList.add('selected-account');
        accountSeller.classList.remove('selected-account');
    });

    accountSeller.addEventListener('click', (ev) => {
        accountSeller.classList.add('selected-account');
        accountCustomer.classList.remove('selected-account');
    });
})();
