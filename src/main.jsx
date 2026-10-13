import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";
createRoot(document.getElementById("root")).render(<AuthContext>
<UserContext> 
    <App/>
    </UserContext>
          </AuthContext>)