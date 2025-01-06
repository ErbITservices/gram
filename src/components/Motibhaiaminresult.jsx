import axios from "axios";

import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
// import Motibhaiamin1result from "./Motibhaiamin1result";
function Motibhaiaminresult() {
  const pdfref = useRef();
  const downloadpdf = useReactToPrint({
    content: () => pdfref.current,
    documentTitle: "Ahevalform",
  });
  const [data, setdata] = useState();
  useEffect(() => {
    const dataget = async () => {};
    dataget();
  }, []);
  const category = useRef();
  async function showresult() {
    console.log(category.current.value);
    try {
      const response = await axios.get(
        `https://gramgranthalay-backend.vercel.app/${category.current.value}/`
      );
      console.log(response.data),
        response.data.sort(({ marks: a }, { marks: b }) => b - a);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const navigator = useNavigate();
  const [library, setlibrary] = useState();
  async function handleshowdata(e) {
    console.log(e);
    if (category.current.value === "Motibhaiamin1") {
      try {
        

        navigator("/motibhaiamin1result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin2") {
      try {
        

        navigator("/Motibhaiamin2result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin3") {
      try {
       

        navigator("/Motibhaiamin3result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin4") {
      try {
        

        navigator("/Motibhaiamin4result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin5") {
      try {
        

        navigator("/Motibhaiamin5result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin6") {
      try {
        

        navigator("/Motibhaiamin6result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (category.current.value === "Motibhaiamin7") {
      try {
        

        navigator("/Motibhaiamin7result", { state: { data: e } });
        // console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function handledelete(id) {
    const response = await axios.delete(
      `https://gramgranthalay-backend.vercel.app/Motibhaiamin7/${id}`
    );
    console.log(response);
    
  }

  return (
    <>
      <NavBar></NavBar>
      {!library && (
        <center>
          <div className="main rounded">
            <h1 className="heighlight">Result of Motibhai Amin Award Form</h1>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-2">
                <label className="col-sm-10 col-form-label">Category :</label>
              </div>
              <div className="col-8">
                <select
                  required
                  id="inputState"
                  name="gam"
                  ref={category}
                  className="form-select"
                >
                  <option selected value={""}>
                    Select
                  </option>
                  <option value={"Motibhaiamin1"}>અંધજન ગ્રંથાલય</option>
                  <option value={"Motibhaiamin2"}>શહેર ગ્રંથાલય</option>
                  <option value={"Motibhaiamin3"}>ગ્રામ ગ્રંથાલય</option>
                  <option value={"Motibhaiamin4"}>
                    શહેર શાખા /નગરકક્ષા-૧ ગ્રંથાલય
                  </option>
                  <option value={"Motibhaiamin5"}>નગરકક્ષા-૨ ગ્રંથાલય</option>
                  <option value={"Motibhaiamin6"}>મહિલા બાળ ગ્રંથાલય</option>
                  <option value={"Motibhaiamin7"}>વિશિષ્ટ ગ્રંથાલય</option>
                </select>
              </div>
              <div className=" col">
                <button
                  type="button"
                  onClick={showresult}
                  className="btn btn-primary"
                >
                  Search
                </button>
              </div>
            </div>
            {data && (
              <>
                <table
                  ref={pdfref}
                  className="table table-bordered table-hover rounded"
                >
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Library Name</th>
                      <th>Taluko</th>
                      <th>District</th>
                      <th>Marks</th>
                      <th>Show / Edit Data</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((i) => (
                      <tr>
                        <td>{i.currentyear}</td>
                        <td>{i.lname}</td>
                        <td>{i.taluko}</td>
                        <td>{i.district}</td>
                        <td>{i.marks}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              handleshowdata(i);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              handledelete(i._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={downloadpdf}
                  className="btn btn-primary"
                >
                  Donwload PDF
                </button>
                <Link to="/">
                  <button class="btn btn-warning m-3 " type="button">
                    Back
                  </button>
                </Link>
              </>
            )}
          </div>
        </center>
      )}
      {/* {library && <Motibhaiamin1result data={library}></Motibhaiamin1result>} */}

      <Footer></Footer>
    </>
  );
}
export default Motibhaiaminresult;
