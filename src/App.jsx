// import { GoogleLogin } from "@react-oauth/google";
// import { googleLogout } from "@react-oauth/google";
import "./App.css";
import HomePage from "./components/homepage/HomePage";

function App() {
  // const handleLogout = () => {
  //   googleLogout();
  //   localStorage.removeItem("user");
  //   alert("User logged out");
  // };
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

// <GoogleLogin
//   onSuccess={(credentialResponse) => {
//     console.log(credentialResponse);
//   }}
//   onError={() => {
//     console.log("Login Failed");
//   }}
// />
// <button onClick={handleLogout}>Log out</button>
