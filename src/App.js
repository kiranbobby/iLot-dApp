import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blog/Blogs";
import Properties from "./Pages/Properties/Properties";
import Navbar from "./Components/Organism/Navbar/Navbar";
import Footer from "./Components/Organism/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import LoginModal from "./Components/Molecules/LoginModal/LoginModal";
import UserProfile from "./Pages/UserProfile/UserProfile";
import MyTransaction from "./Pages/UserProfile/MyTransactions/MyTransaction";
import MySession from "./Pages/UserProfile/MySession/MySession";
import ListedProperties from "./Pages/UserProfile/ListedProperties/ListedProperties";
import SavedProperties from "./Pages/UserProfile/SavedProperties/SavedProperties";
import ContactedProperties from "./Pages/UserProfile/ContactedProperties/ContactedProperties";
import CreateAccountModal from "./Components/Molecules/CreateAccountModal/CreateAccountModal";
import ListingProperties from "./Pages/ListingProperties/ListingProperties";

function App() {
  const Modals = () => (
    <>
      <LoginModal />
      <CreateAccountModal />
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list-property" element={<ListingProperties />} />

          {/* User Profile routes */}
          <Route path="/user-profile" element={<UserProfile />}>
            <Route
              path="/user-profile/my-transaction"
              element={<MyTransaction />}
            />
            <Route path="/user-profile/my-session" element={<MySession />} />
            <Route
              path="/user-profile/list-properties"
              element={<ListedProperties />}
            />
            <Route
              path="/user-profile/saved-properties"
              element={<SavedProperties />}
            />
            <Route
              path="/user-profile/contacted-properties"
              element={<ContactedProperties />}
            />
          </Route>
        </Routes>
        <Footer />
        <Modals />
      </BrowserRouter>
    </>
  );
}
export default App;
