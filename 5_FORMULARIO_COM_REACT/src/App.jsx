//!Components
import MyForm from "./Components/MyForm";

//!Styles e outros
import "./App.css";

function App() {
  return (
    <>
      <h1>Forms!</h1>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Sou advogado",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
