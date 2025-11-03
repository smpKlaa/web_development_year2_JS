let restaurants = [];

const modal = document.getElementById("modal");
const modalName = document.getElementById("modal-name");
const modalAddress = document.getElementById("modal-address");
const modalPostal = document.getElementById("modal-postalCode");
const modalCity = document.getElementById("modal-city");
const modalPhone = document.getElementById("modal-phone");
const modalCompany = document.getElementById("modal-company");
const modalMenu = document.getElementById("modal-menu");

fetchData(
  "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants"
).then((response) => {
  restaurants = response;
  for (const restaurant of restaurants) {
    addRestaurantToList(restaurant);
  }
});

// Make modal close when clicking outside.
// Stole this off chatGPT.
modal.addEventListener("click", (event) => {
  const dialogRect = modal.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogRect.left &&
    event.clientX <= dialogRect.right &&
    event.clientY >= dialogRect.top &&
    event.clientY <= dialogRect.bottom;

  if (!isInDialog) {
    modal.close();
  }
});

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error while fetching data.");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function addRestaurantToList(restaurant) {
  const row = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdAddress = document.createElement("td");

  tdName.textContent = restaurant.name;
  tdAddress.textContent = restaurant.address;

  row.appendChild(tdName);
  row.appendChild(tdAddress);

  row.addEventListener("click", (event) => {
    // Remove the highlight from all elements.
    const highlighted = document.getElementsByClassName("highlight");
    for (const element of highlighted) {
      element.classList.remove("highlight");
    }

    // Add highlighted class to clicked element if it's not there already.
    row.classList.contains("highlight")
      ? row.classList.remove("highlight")
      : row.classList.add("highlight");

    // Open modal with right info.
    modal.showModal();
    modalName.innerText = restaurant.name;
    modalAddress.innerText = restaurant.address;
    modalPostal.innerText = restaurant.postalCode;
    modalCity.innerText = restaurant.city;
    modalPhone.innerText = restaurant.phone;
    modalCompany.innerText = restaurant.company;

    fetchData(
      `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`
    ).then((menuData) => {
      modalMenu.innerHTML = "";

      if (menuData.courses.length == 0) {
        const listItemElement = document.createElement("li");
        const itemNameElement = document.createElement("h3");

        itemNameElement.textContent = "No menu found";

        listItemElement.appendChild(itemNameElement);

        modalMenu.appendChild(listItemElement);
      }

      for (const menuItem of menuData.courses) {
        const listItemElement = document.createElement("li");
        const itemNameElement = document.createElement("h3");
        const itemPriceElement = document.createElement("p");

        itemNameElement.textContent = menuItem.name;
        itemPriceElement.textContent = menuItem.price;

        listItemElement.appendChild(itemNameElement);
        listItemElement.appendChild(itemPriceElement);

        modalMenu.appendChild(listItemElement);
      }
    });
  });

  document.querySelector("tbody").appendChild(row);
}
