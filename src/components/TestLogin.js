function TestLogin() {
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/testLogin", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  const handleAPI = async () => {
    try {
      const response = await fetch("http://localhost:5000/verify", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Lỗi khi truy cập API:", error);
    }
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleAPI}>Truy cap API</button>
    </>
  );
}

export default TestLogin;
