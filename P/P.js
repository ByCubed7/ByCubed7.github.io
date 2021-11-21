



function InitProjects() {
  grid = document.getElementById("grid");
  base = "https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no"

  for (let i = 0; i < 6; i++)
    CreateTile(grid, base);

  for (let i = 0; i < 20; i++)
    CreateTile(grid, "PaperRogue/r/Tile.png", "PaperRogue/index.html");

}

function CreateTile(grid, imageSRC, href="#") {
  var ele = document.createElement("DIV");
  ele.classList.add("grid-block");
  ele.innerHTML = `<div class='tile'><a class='tile-link' href='${href}'><img class='tile-img' src='${imageSRC}' alt='Image'></a></div>`;
  grid.appendChild(ele);
}

window.onload = InitProjects;
