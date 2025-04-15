import { useEffect, useState } from "react";

function NecklaceList() {
  const [necklaces, setNecklaces] = useState([]);

  useEffect(() => {
    fetch("https://test-backend-07in.onrender.com/listNecklace")
      .then((response) => response.json())
      .then((data) => setNecklaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddNecklace = () => {
    const newNecklace = {
      name: "Chuỗi tay truyền thống",
      price: 150,
      status: "Còn hàng",
      description: "Vòng cổ làm bằng tay từ chất liệu thiên nhiên.",
      image: "", // không có hình
    };

    fetch("http://localhost:5000/addNecklace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNecklace),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Thêm thành công:", data);
        // Optional: Cập nhật danh sách trên giao diện nếu cần
      })
      .catch((err) => console.error("Lỗi khi thêm:", err));
  };

  return (
    <div className="necklace-list">
      <h2>Danh sách necklace:</h2>
      <button onClick={handleAddNecklace} style={{ marginBottom: "20px" }}>
        Thêm
      </button>
      <ul>
        {necklaces.map((necklace, index) => (
          <li key={index} style={{ marginBottom: "20px", listStyle: "none" }}>
            <img
              src={necklace.image}
              alt={necklace.name}
              style={{ width: "150px", height: "auto", borderRadius: "8px" }}
            />
            <h3>{necklace.name}</h3>
            <p>
              <strong>Giá:</strong> ${necklace.price}
            </p>
            <p>
              <strong>Trạng thái:</strong> {necklace.status}
            </p>
            <p>
              <strong>Mô tả:</strong> {necklace.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NecklaceList;
