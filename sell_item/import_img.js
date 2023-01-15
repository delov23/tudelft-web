(function () {
  const input = document.getElementById("item-images-field");
  input.addEventListener("change", () => {
    const output = document.querySelector(".item-img");
    output.src = URL.createObjectURL(input.files[0]);

    const promptEl = document.querySelector(".img-container>p");
    promptEl.style.display = "none";
  });
})();
