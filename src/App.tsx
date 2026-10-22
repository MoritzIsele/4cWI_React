import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container">
        <Card
          title="Berg"
          imgSrc="https://picsum.photos/seed/picsum/200/300"
          description="Berg"
        />
        <Card
          title="bildchen"
          imgSrc="https://picsum.photos/200/300"
          description="bildchen"
        />
        <Card
          title="Dog"
          imgSrc="https://picsum.photos/id/237/200/300"
          description="Dog"
        />
      </div>
    </>
  );
}

export default App;
