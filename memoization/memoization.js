// Utility function to memoize API calls with cache expiration
function memoizeApiCall(fn, ttl = 60000) {
  const cache = new Map();

  return async function (...args) {
    const key = JSON.stringify(args); // Convert arguments to a string key

    if (cache.has(key)) {
      const { timestamp, result } = cache.get(key);
      if (Date.now() - timestamp < ttl) {
        console.log("Returning cached data...");
        return result;
      }
    }

    console.log("Fetching new data...");
    try {
      const resultPromise = fn(...args);
      cache.set(key, { timestamp: Date.now(), result: resultPromise });

      const result = await resultPromise;
      cache.set(key, { timestamp: Date.now(), result: result });

      return result;
    } catch (error) {
      cache.delete(key); // Remove the entry from cache if the API call fails
      throw new Error("API call failed: " + error.message);
    }
  };
}

// Example API function
async function fetchUserData(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

// Create memoized version of the API call with a TTL of 1 minute
const memoizedFetchUserData = memoizeApiCall(fetchUserData, 60000);

// Usage example
async function runExample() {
  try {
    let data = await memoizedFetchUserData(1); // Makes an API call
    document.getElementById("data-container").innerHTML = JSON.stringify(
      data,
      null,
      2
    ); // Display data in the div
    console.log(await memoizedFetchUserData(1)); // Returns cached data
    console.log(await memoizedFetchUserData(2)); // Makes another API call
    console.log(await memoizedFetchUserData('abc')); // Failed network request
  } catch (error) {
    console.error(error);
  }
}

// Ensure the DOM is loaded before running the example
document.addEventListener("DOMContentLoaded", function () {
  runExample();
});
