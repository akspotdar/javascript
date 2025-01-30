// Ensure the DOM is loaded before running the example
document.addEventListener("DOMContentLoaded", function () {
  function createCounter() {
    let count = 0; // Private variable
    return {
      increment: function () {
        count++;
        updateDisplay(count);
      },
      decrement: function () {
        count--;
        updateDisplay(count);
      },
      getCount: function () {
        return count;
      },
    };
  }
  // Create the counter
  const counter = createCounter();

  // Update the display with the current count
  function updateDisplay(count) {
    document.getElementById("countDisplay").textContent = count;
  }

  // Attach event listeners to buttons
  document
    .getElementById("incrementBtn")
    .addEventListener("click", function () {
      counter.increment();
    });

  document
    .getElementById("decrementBtn")
    .addEventListener("click", function () {
      counter.decrement();
    });
});

// Main use cases of closures in JavaScript:
// Encapsulation: Closures allow you to create private variables in JavaScript.
// You can hide data within a closure that is not accessible from the outside,
// but still provide a way to interact with it through functions.

// Callbacks and Asynchronous Functions:
// Closures are frequently used in asynchronous programming
// (e.g., handling events, promises, or setTimeout).
// The closure "remembers" the variables from its environment
// even after an asynchronous operation completes.
