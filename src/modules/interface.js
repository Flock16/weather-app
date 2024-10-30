import DataRetriever from "./datafetcher";

class Interface {
  constructor() {
    this.retriever = new DataRetriever();
    this.searchButton = document.querySelector("button");
    this.searchInput = document.querySelector("input");
    this.header = document.querySelector("h2");
    this.condition = document.querySelector(".condition > p");
    this.humidity = document.querySelector("#hum");
    this.temperature = document.querySelector("#temp");

    this.searchButton.addEventListener("click", () => this.searchQuery());
  }

  displayData(data) {
    this.header.textContent = data.resolvedAddress;
    this.condition.textContent = data.currentConditions.conditions;
    this.humidity.textContent = `${data.currentConditions.humidity}% Humidity`;
    this.temperature.textContent = `${data.currentConditions.temp}\u00B0 Degrees`;
  }

  displayInvalid() {
    this.header.textContent = "Invalid Search";
    this.condition.textContent = "--";
    this.humidity.textContent = "-- Humidity";
    this.temperature.textContent = "-- Degrees";
  }

  async searchQuery() {
    const query = this.searchInput.value;

    // Display Loading message
    this.header.textContent = "Loading Data";

    try {
      const data = await this.retriever.getData(query);

      this.displayData(data);
      this.searchInput.value = "";
    } catch (error) {
      this.displayInvalid();
    }
  }
}

export default Interface;
