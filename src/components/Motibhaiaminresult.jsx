import axios from "axios";

import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Motibhaiamin1result from "./motibhaiamin1result";
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
        `http://gramgranthalay-backend-2.onrender.com/${category.current.value}/`
      );
      console.log(response.data),
        response.data.sort(({ marks: a }, { marks: b }) => b - a);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
    const [library, setlibrary] = useState();
  async function handleshowdata(e) {
    console.log(e);
    try {
          const response = await axios.get(
            `http://gramgranthalay-backend-2.onrender.com/${e}`
          );
          console.log(response.data), setlibrary(response.data);
        } catch (error) {
          console.log(error);
    }
    
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
                  <option value={"Motibhaiamin1"}>મહિલા બાળ</option>
                  <option value={"Motibhaiamin2"}>શહેર ગ્રંથાલય</option>
                  <option value={"Motibhaiamin3"}>શહેર શાખા નગરકક્ષા</option>
                  <option value={"Motibhaiamin4"}>ગ્રામ ગ્રંથાલય</option>
                  <option value={"Motibhaiamin5"}>નગરકક્ષા ૧</option>
                  <option value={"Motibhaiamin6"}>નગરકક્ષા ૨</option>
                  <option value={"Motibhaiamin7"}>વિશીષ્ટ લાઇબ્રેરી</option>
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
                      <th>Show Data</th>
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
                              handleshowdata(i.lname);
                            }}
                          >
                            Show
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
      {library && (<Motibhaiamin1result data={library}></Motibhaiamin1result>)}

      <Footer></Footer>
    </>
  );
}
export default Motibhaiaminresult;
