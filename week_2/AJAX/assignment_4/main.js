try {
  const user = {
    name: "John Doe",
    job: "Developer",
  };
  const url = "https://reqres.in/api/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(user),
  };
  fetchData(url, options).then((userData) => {
    console.log(userData);
  });
} catch (error) {
  console.error("An error occurred:", error);
}

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Error while fetching data.");
  }
  return response.json();
}
