(function () {
  const input = document.getElementById("item-images-field");
  input.addEventListener("change", loadFile);

  function loadFile(event) {
    const output = document.querySelector(".item-img");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
    const promptEl = document.querySelector(".img-container>p");
    promptEl.style.display = "none";
  }
})();
