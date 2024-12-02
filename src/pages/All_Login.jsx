import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "/src/App.css";
import { useEffect } from "react";
import Slideshow from "../components/Slid";
import Footer from "../components/Footer";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
function All_Login() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનું પોર્ટલ"}></NavBar>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-center">
          <Link to="/login1" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn loginbtn btn-success"
              //   onClick={navigate("/form")}
              type="button"
            >
              <AccountCircleOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              Gandhinagar Director
            </button>
          </Link>
          <Link to="/sclLogin1" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn scl-btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              <PeopleAltOutlinedIcon sx={{ fontSize: 50 }} className="icon" />
              SCL GANDHINAGAR
            </button>
          </Link>
          <Link to="/sclLogin2" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn scl-btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              <PeopleAltOutlinedIcon sx={{ fontSize: 50 }} className="icon" />
              SCL VADODARA
            </button>
          </Link>
          <br />
          <Link to="/Login4" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              ADL AHMEDABAD
            </button>
          </Link>
          <Link to="/Login5" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              ADL MEHSANA
            </button>
          </Link>
          <Link to="/Login2" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              ADL VADODARA
            </button>
          </Link>
          <Link to="/Login6" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              ADL SURAT
            </button>
          </Link>
          <Link to="/Login7" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
              ADL BHAVNAGAR
            </button>
          </Link>
          <Link to="/Login8" style={{ textDecoration: "none" }}>
            <button
              class="btn dash-btn btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              <SupervisorAccountOutlinedIcon
                sx={{ fontSize: 50 }}
                className="icon"
              />
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
