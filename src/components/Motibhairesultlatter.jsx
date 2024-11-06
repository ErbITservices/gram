import axios from "axios";

import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Motibhairesultlatter() {
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
        `https://gramgranthalay-backend-2.onrender.com/${category.current.value}/`
      );
      console.log(response.data),
        response.data.sort(({ marks: a }, { marks: b }) => b - a);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleshowdata(e) {
    console.log(e);
  }

  return (
    <>
      <NavBar></NavBar>
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
              <div className="latter">
                <h1> ભલામણ</h1>
                <h3>
                  શહેર ગ્રંથાલય કક્ષાના સને ૨૦૨૨-૨૩ ના વર્ષ ના સ્પર્ધક
                  ગ્રંથાલયોના મૂલ્યાંકન બાદ નીચેની વિગતે ગ્રંથાલયોને ક્રમાનુસાર
                  ભલામણ આ પેટા પ્રાદેશિક સમિતિ કરે છે
                </h3>
                {/* <p>(૧) ઉત્તમ ગ્રંથાલય :- {data}</p>
                <p>(૨) મધ્યમ ગ્રંથાલય :- {data}</p>
                <p>(૩) સારૂ ગ્રંથાલય :- {data}</p> */}
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, અમદાવાદ</p>
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, રાજકોટ</p>
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, વડોદરા</p>
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, ભાવનગર</p>
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, સુરત</p>
                <p className="latternames">મદદનીશ ગ્રંથાલય નિયામક, મહેસાણા</p>
                <p className="latternames">
                  મદદનીશ ગ્રંથાલય નિયામક ગ્રંથાલય નિયામકની કચેરી, ગાંધીનગર
                </p>
                <p className="latternames">
                  ગ્રંથાલય નિયામક ગુજરાત રાજ્ય, ગાંધીનગર
                </p>
                {console.log(data[0])}
              </div>
              <table
                ref={pdfref}
                className="table table-bordered table-hover rounded"
              >
                <thead>
                  <tr>
                    <th>Library id</th>
                    <th>Library Name</th>

                    <th>City</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((i) => (
                    <tr>
                      <td>{i.currentyear}</td>
                      <td>{i.lname}</td>
                      <td>{i.gam}</td>
                      <td>{i.marks}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={handleshowdata}
                        >
                          Show data
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
      <Footer></Footer>
    </>
  );
}
export default Motibhairesultlatter;
