import { Toaster } from "react-hot-toast";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRout/ProtectedRoute";

const App = () => (
  <div className="App">
    <ProtectedRoute>
      <MainLayout />
      <Toaster />
    </ProtectedRoute>
  </div>
);

export default App;
