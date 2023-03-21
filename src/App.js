import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer1 = { name: "Dr. Mahfuz", job: "singer" };
const singer2 = { name: "Eva Rahman", job: "singer" };
const singers = [
  { name: "Dr. Mahfuz", job: "singer" },
  { name: "Eva Rahman", job: "singer" },
  { name: "Agun", job: "Shopno" },
  { name: "Shuvro", job: "pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const nayoks = [
    "Rubel",
    "Bapparaj",
    "Kuber",
    "Jashim",
    "Salman Shah",
    "Riyaz",
    "Anwar",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}
      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}
      {singers.map((singer) => (
        <Person name={singer.name}></Person>
      ))}
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
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
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: Ajay Devgun</h3>
      <p>Phone: {props.phone}</p>
      <p>Movie: {props.movie}</p>
    </div>
  );
}

export default App;
