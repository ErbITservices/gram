import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home2() {
  const navigator = useNavigate();
  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
    // localStorage.setItem("login", "director");
  }
  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      <div class=" mb-3">
        <form class="container-fluid justify-content-start">
          <Link to="/Dataintable">
            <button class="btn m-3 btn-info " type="button">
              Report
            </button>
          </Link>

          <Link to="/Addnew">
            <button
              class="btn btn-success m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નવી લાઇબ્રેરી ઉમેરો
            </button>
          </Link>
          <Link to="/master">
            <button
              class="btn btn-info m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નિરીક્ષણ અહેવલ ફોમ
            </button>
          </Link>

          <button class="btn btn-danger m-3 " onClick={Logout} type="button">
            Log Out
          </button>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Home2;
