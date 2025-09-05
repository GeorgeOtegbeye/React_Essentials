import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
