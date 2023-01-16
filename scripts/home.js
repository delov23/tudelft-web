(function () {
  const filterBtn = document.querySelector(".filters-header > button");
  filterBtn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((f) => {
      const toAdd = f.classList.contains("open") ? "closed" : "open";
      const toRemove = toAdd === "open" ? "closed" : "open";
      f.classList.add(toAdd);
      f.classList.remove(toRemove);
    });
    filterBtn.classList.toggle("upside-down");
  });

  const fromEl = document.getElementById("min-price");
  const toEl = document.getElementById("max-price");

  toEl.addEventListener("change", () => {
    fromEl.max = toEl.value;
  });

  fromEl.addEventListener("change", () => {
    toEl.min = fromEl.value;
  });
  
})();
