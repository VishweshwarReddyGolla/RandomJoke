const url = "https://apis.ccbp.in/jokes/random";

const getJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("joke").textContent = data.value;
  } catch (error) {
    document.getElementById("joke").innerText = "Failed to fetch joke. Please try again.";
    console.error(error);
  }
};
