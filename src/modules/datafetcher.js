class DataRetriever {
  async getData(query) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}/?unitGroup=metric&key=LTG9J5UMXCHYELHF8GEYWNQA6`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default DataRetriever;
