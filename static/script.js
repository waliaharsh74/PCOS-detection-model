// static/script.js

function predict() {
  // Fetch input values
  const age = document.getElementById("age").value;
  const bmi = document.getElementById("bmi").value;
  const menstrualCycle = document.getElementById("menstrualCycle").value;
  const hirsutismScore = document.getElementById("hirsutismScore").value;
  const acnePresence = document.getElementById("acnePresence").value;
  const familyHistory = document.getElementById("familyHistory").value;
  const insulinResistance = document.getElementById("insulinResistance").value;
  const ovulatoryDysfunction = document.getElementById(
    "ovulatoryDysfunction"
  ).value;

  // Send data to the server for prediction
  fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      age,
      bmi,
      menstrualCycle,
      hirsutismScore,
      acnePresence,
      familyHistory,
      insulinResistance,
      ovulatoryDysfunction,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display the prediction result
      document.getElementById(
        "result"
      ).innerText = `Prediction: ${data.result}`;
    })
    .catch((error) => console.error("Error:", error));
}
