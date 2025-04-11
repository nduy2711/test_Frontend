import Login from "./components/Login";
import NecklaceList from "./components/NecklaceList";
import TestLogin from "./components/TestLogin";

function App() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:5000/", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert(data.message);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <NecklaceList />
    </div>
  );
}

export default App;
