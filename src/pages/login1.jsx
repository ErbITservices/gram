import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { FadeLoader } from "react-spinners";

const Login = () => {
  
  const [loader, setloader] = useState("false");
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "director",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setloader("true");

    try {
      const response = await fetch(
        `https://gramgranthalay-backend-2.onrender.com/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
setloader("false");
      if (response.ok) {
        const res_data = await response.json();
        console.log("jaimin", res_data);
        //storeTokenInLs(res_data.token);

        console.log("dhh");
        localStorage.setItem("login", "director");
        // localStorage.setItem("district");
        localStorage.setItem("id", user.email);
        localStorage.setItem("pass", user.password);
        setUser({
          email: "",
          password: "",
        });
        setloader("false");
        navigate("/Directo_Dashbord");
      } else {
        setloader("false");
        alert("Invalid data");
      }
    } catch (err) {
      setloader("false");
      console.log(err);
    }
  };

  return (
    <>
      <NavBar titel={"પુસ્તકાલય ગુજરાત રાજ્યના ડાયરેક્ટર, ગાંધીનગર"}></NavBar>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader === "false" && (
        <section>
          <main>
            <div className="section-registration">
              <div className="container grid grid-two-cols">
                <div className="registration-image reg-img"></div>
                {/* our main registration code  */}
                <div className="registration-form">
                  <h1 className="main-heading mb-3">Director Login</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>User Name</label>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="User Name"
                      />
                    </div>

                    <div>
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="Password"
                      />
                    </div>
                    <br />
                    <button type="submit " className="btn  btn-primary">
                      Login
                    </button>
                    <Link to="/Forgotpassword">
                      <p>Forgot Password</p>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>
      )}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
