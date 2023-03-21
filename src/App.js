import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer1 = { name: "Dr. Mahfuz", job: "singer" };
const singer2 = { name: "Eva Rahman", job: "singer" };

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappaRaj" nayika="cheka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5>New component</h5>
      <Friend movie="singham" phone="017777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      {/* <h1>Sakib Al Hasan</h1> */}
      <h1>{props.name}</h1>
      <p>Profession: Cricketer</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: Ajay Devgun</h3>
      <p>Phone: {props.phone}</p>
      <p>Movie: {props.movie}</p>
    </div>
  );
}

export default App;
