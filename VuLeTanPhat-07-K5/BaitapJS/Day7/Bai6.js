function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController(); // Tạo một AbortController
  const signal = controller.signal; // Để hủy request

  // Set timeout để hủy request sau 'timeout' milliseconds
  const timeoutId = setTimeout(() => {
    controller.abort(); // Hủy request khi quá thời gian
  }, timeout);

  // Fetch data với abort signal
  return fetch(url, { signal })
    .then(response => {
      clearTimeout(timeoutId); // Hủy timeout nếu request thành công
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Trả về dữ liệu JSON
    })
    .catch(error => {
      clearTimeout(timeoutId); // Hủy timeout khi có lỗi
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      }
      throw error; // Các lỗi khác
    });
}

// Example usage
const URL = 'https://jsonplaceholder.typicode.com/posts/1';
const TIMEOUT = 5000;

fetchDataWithTimeout(URL, TIMEOUT)
  .then(data => {
    console.log('Fetched data:', data);
    console.log('Title:', data.title);
    console.log('Body:', data.body);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
