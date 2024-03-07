async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can handle errors here, such as logging, displaying an error message, etc.
      throw error;
    }
  }
  
  // Example usage:
  async function fetchAndProcessData() {
    const apiUrl = 'https://api.example.com/data';
    try {
      const data = await fetchData(apiUrl);
      console.log('Data from API:', data);
      // Process the fetched data here
    } catch (error) {
      console.error('Error processing data:', error);
      // Handle errors here, such as displaying an error message to the user
    }
  }
  
  // Call the function to fetch and process the data
  fetchAndProcessData();
  