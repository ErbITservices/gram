import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "/src/App.css";
import { useEffect } from "react";
import Slideshow from "../components/Slid";
import Footer from "../components/Footer";
function All_Login() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
          <Link to="/login1">
            <button
              class="btn  btn-success"
              //   onClick={navigate("/form")}
              type="button"
            >
              Gandhinagar Director
            </button>
          </Link>
          <Link to="/sclLogin1">
            <button
              class="btn loginbtn btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              SCL GANDHINAGAR
            </button>
          </Link>
          <Link to="/sclLogin2">
            <button
              class="btn  btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              SCL VADODARA
            </button>
          </Link>
          <br />
          <Link to="/Login4">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL AHMEDABAD
            </button>
          </Link>
          <Link to="/Login5">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL MEHSANA
            </button>
          </Link>
          <Link to="/Login2">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL VADODARA
            </button>
          </Link>
          <Link to="/Login6">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL SURAT
            </button>
          </Link>
          <Link to="/Login7">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL BHAVNAGAR
            </button>
          </Link>
          <Link to="/Login8">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL RAJKOT
            </button>
          </Link>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default All_Login;
