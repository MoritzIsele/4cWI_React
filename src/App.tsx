import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container">
        <Card
          title="Cat"
          imgSrc="https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI"
          description="Cat"
        />
        <Card
          title="Bridge"
          imgSrc="https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s"
          description="Bridge"
        />
        <Card
          title="Dog"
          imgSrc="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=8j0J1g5k6r7x3X9Z2Fq4z5G5G5G5G5G5G5G5G5G5G5"
          description="Dog"
        />
      </div>
    </>
  );
}

export default App;
