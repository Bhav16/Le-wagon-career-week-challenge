const stations = document.querySelector(".radio");

fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((radio) => {
      const radio = `<li class="list-inline-item">
        <img src="${radio.img}" alt="">
        <p>${radio.name}</p>
      </li>`;
      stations.insertAdjacentHTML("beforeend", radio);
      console.log(data)
    });
  });
