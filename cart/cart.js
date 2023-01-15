(function () {
  const items = document.querySelectorAll(".item-card");

  items.forEach((item) => {
    item.querySelector(".minus-button").addEventListener("click", () => {
      const qtyEl = item.querySelector(".qty-field");
      const priceEl = item.querySelector(".price-info>p");
      const totalEl = item.querySelector(".total-info>p");

      if (+qtyEl.value > 0) {
        qtyEl.value = (+qtyEl.value - 1).toString();
        totalEl.textContent =
          "€" +
          (
            Number(totalEl.textContent.substring(1)) -
            Number(priceEl.textContent.substring(1))
          ).toFixed(2);
        updateTotal();
      }
    });

    item.querySelector(".plus-button").addEventListener("click", () => {
      const qtyEl = item.querySelector(".qty-field");
      const priceEl = item.querySelector(".price-info>p");
      const totalEl = item.querySelector(".total-info>p");

      qtyEl.value = (+qtyEl.value + 1).toString();
      totalEl.textContent =
        "€" +
        (
          Number(totalEl.textContent.substring(1)) +
          Number(priceEl.textContent.substring(1))
        ).toFixed(2);
      updateTotal();
    });

    item.querySelector(".remove-button").addEventListener("click", () => {
      item.remove();
      updateTotal();
    });
  });

  function updateTotal() {
    const totalEls = document.querySelectorAll(".total-info>p");
    let sum = 0;
    totalEls.forEach((el) => {
      sum += +el.textContent.substring(1);
    });
    document.querySelector(".total-price").textContent = "€" + sum.toFixed(2);
  }

  updateTotal();
})();
