import "./app.css"
import Student from "./pages/home/Student.jsx";
import { std } from "./DB_conditions.js";

function App() {
    return (
      <div>
        <Student student={std} />
      </div>
    );
  }

export default App;