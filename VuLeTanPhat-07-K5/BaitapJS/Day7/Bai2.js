// Hàm retry với tối đa maximumRetryCount lần
function fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
  return new Promise(async (resolve, reject) => {
    let attempt = 0;

    while (attempt < maximumRetryCount) {
      try {
        const result = await fetcher(); // Gọi hàm fetcher (có thể thành công hoặc lỗi)
        return resolve(result);         // Thành công -> resolve ngay
      } catch (error) {
        attempt++;
        console.warn(`⚠️ Attempt ${attempt} failed: ${error.message}`);
        if (attempt >= maximumRetryCount) {
          return reject(new Error("All retries failed"));
        }
      }
    }
  });
}

function simulateAPICall() {
  return new Promise((resolve, reject) => {
    // 50% khả năng thất bại
    if (Math.random() < 0.5) {
      reject(new Error("API call failed"));
    } else {
      resolve("API call succeeded");
    }
  });
}

// Dùng thử
fetchWithAutoRetry(simulateAPICall, 3)
  .then(result => {
    console.log("✅ Success:", result);
  })
  .catch(error => {
    console.error("❌ All retries failed:", error.message);
  });

