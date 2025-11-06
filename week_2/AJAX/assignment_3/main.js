const requestURL = "https://reqres.in/api/unknown/23";

func();

async function func() {
  try {
    // GET request to API
    const response = await fetch(requestURL, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    if (response.ok) {
      // Convert response to JSON.
      const jsonData = await response.json();
      // Log response to console.
      console.log(jsonData);
    } else {
      throw new Error("Error while fetching data.");
    }
  } catch (error) {
    console.log(error);
  }
}
