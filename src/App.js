import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "./components/Footer.jsx";
import { Index } from "./components/Index.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center mt-5 mb-5">Loading...</div>;
  }

  return (
    <div className="container">
      {isAuthenticated ? <NavBar user={user} /> : <Index />}
      <Footer />
    </div>
  );
}

export default App;
