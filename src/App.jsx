import addBooks from "./seeders/books";
function App() {
  return (
    <>
      <button onClick={addBooks}>Press me</button>
    </>
  );
}

export default App;
