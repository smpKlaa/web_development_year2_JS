const requestURL = "https://reqres.in/api/users/1";

func();

async function func() {
  try {
    const data = {
      name: "John",
      job: "cashier",
      age: 25,
    };

    const jsonPayload = JSON.stringify(data);

    // POST request to API
    const response = await fetch(requestURL, {
      method: "POST",
      body: jsonPayload,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    // Convert response to JSON.
    const jsonData = await response.json();
    // Log response to console.
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}
