async function getServerTime() { //async func
  try {
    const response = await fetch(window.location.href, {// fetch de lay HEAD, chi yeu cau HEADER cua server ma khong can noi dung trang
      method: 'HEAD'
    });

    const serverDate = response.headers.get("Date");//se lay gia tri Data, thoi gian ma server tra ve

    if (!serverDate) {// khong nhan dc thi tra loi~
      throw new Error("Không lấy được thời gian từ header.");
    }

    return new Date(serverDate).getTime();// neu lay dc thi tra ve thoi gian
  } catch (error) {// bat loi~
    console.error("❌ Lỗi khi lấy thời gian từ server:", error.message);
    return Date.now();
  }
}

(async () => { //goi ham, ham nay la 1 IIFE, tuc la duoc goi ngay lap tuc sau khi duoc dinh nghia
  const serverTime = await getServerTime();// cho ket qua ham tren tra ve

  console.log("🕒 Thời gian server (ms):", serverTime);
  console.log("📅 Thời gian server (ISO):", new Date(serverTime).toISOString());
})();
// chay tren console cua GG