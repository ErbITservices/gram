import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

import { BiBook, BiBookOpen } from "react-icons/bi";

function First() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div class=" mb-3 button">
        <form class="container-fluid justify-content-start">
          <Link to="All_Login">
            <button class="btn btn-outline-success m-3" type="button">
              Login
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
export default First;
