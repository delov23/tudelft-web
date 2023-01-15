(function () {
    const accountCustomer = document.querySelector('.account-customer');
    const accountSeller = document.querySelector('.account-seller');

    accountCustomer?.addEventListener('click', (ev) => {
        accountCustomer.classList.add('selected-account');
        accountSeller.classList.remove('selected-account');
        document.querySelectorAll('.seller-field').forEach((f) => f.remove());
    });

    accountSeller?.addEventListener('click', (ev) => {
        if (document.querySelectorAll('.seller-field').length === 0) {
            accountSeller.classList.add('selected-account');
            accountCustomer.classList.remove('selected-account');

            const el1 = document.createElement('div');
            el1.classList.add('form-field', 'seller-field')
            const el2 = document.createElement('div');
            el2.classList.add('form-field', 'seller-field')

            el1.innerHTML =    `<label for="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    placeholder="Company Ltd"
                                />`;

            el2.innerHTML =    `<label for="phone">Phone number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="0XXXXXXXXX"
                                />`;

            document.querySelector('div > input[id="name"]').parentNode.after(el1, el2);
        }
    });
})();
