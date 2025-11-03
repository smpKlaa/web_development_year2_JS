const requestURL = "https://reqres.in/api/users/1";

func();

async function func() {
  try {
    // GET request to API
    const response = await fetch(requestURL, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    // Convert response to JSON.
    const jsonData = await response.json();
    // Log response to console.
    console.log(jsonData.data);
  } catch (error) {
    console.log(error.message);
  }
}
