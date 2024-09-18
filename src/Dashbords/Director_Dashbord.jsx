import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import Report from "../components/Report";
import axios from "axios";
import { FadeLoader } from "react-spinners";

function Directo_Dashbord() {
  const navigator = useNavigate();
  const district = useRef();
  const [data, setData] = useState();
  const [showdata, setshowdata] = useState("false");
  const [loader, setloader] = useState("false");
  const [showmotibhai, setshowmotibhai] = useState("false");
  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
  }
  useEffect(() => {
    const dataget = async () => {
      setloader("true");
      try {
        const response = await axios.get(
          `https://gramgranthalay-backend-2.onrender.com/form/`
        );
        console.log(response.data), setData(response.data);
        setloader("false");
      } catch (error) {
        console.log(error);
        setloader("false");
      }
       console.log(district.current);
    };
    dataget();
  }, []);
  function handleshowdata() {
    setshowdata("true");
  }
  async function handledistrictdata() {
    console.log(district.current.value);
    if (district.current.value==="All") {
       try {
         const response = await axios.get(
           `https://gramgranthalay-backend-2.onrender.com/form`
         );
         console.log(response.data), setData(response.data);
         setloader("false");
       } catch (error) {
         console.log(error);
         setloader("false");
       }
    }
    else{
      try {
        const response = await axios.get(
          `https://gramgranthalay-backend-2.onrender.com/district/${district.current.value}`
        );
        console.log(response.data), setData(response.data);
        setloader("false");
      } catch (error) {
        console.log(error);
        setloader("false");
      }
    }
  }

 
  function handleback() {
    setshowdata("false");
  }
  return (
    <>
      <NavBar></NavBar>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader === "false" && (
        <div>
          {showdata === "false" && (
            <div class=" mb-3 btn-container">
              <form class="container-fluid justify-content-start">
                <Link to="/Motibhaiaminbtnpage">
                  <button class="btn btn-info m-3" type="button">
                    Moti bhai amin form
                  </button>
                </Link>
                <Link to="/Motibhaiaminresult">
                  <button class="btn m-3 btn-success " type="button">
                    Result of motibhai
                  </button>
                </Link>

                <button
                  onClick={handleshowdata}
                  class="btn m-3 button-25 "
                  type="button"
                >
                  Report
                </button>

                {/* <Link to="/SingleData">
            <button class="btn btn-outline-success me-2" type="button">
              Show Single Data
            </button>
          </Link> */}

                <button
                  class="btn btn-danger m-3"
                  onClick={Logout}
                  type="button"
                >
                  Log Out
                </button>
              </form>
            </div>
          )}
          {showdata === "true" && (
            <>
              <select
                required
                onChange={handledistrictdata}
                ref={district}
                className="form-select"
              >
                <option selected value="">
                  Select
                </option>

                <option>Gandhinagar</option>
                <option>Meshana</option>
                <option>Vadodara</option>
                <option>Surat</option>
                <option>Ahemedabad</option>
                <option>Bhavnagar</option>
                <option>Rajkot</option>
                <option value={"All"}>All</option>
              </select>
              <Report handleback={handleback} arr={data} title={"director"} />
            </>
          )}
        </div>
      )}

      <Footer></Footer>
    </>
  );
}
export default Directo_Dashbord;
