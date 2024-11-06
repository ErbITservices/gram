import { useRef, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

import { FadeLoader } from "react-spinners";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import "./motibhai.css";

function Motibhaiamin1result({ data }) {
  let count = 0;
  const d = new Date();
  let year = d.getFullYear();
  const currentyear = useRef();
  const [loader, setloader] = useState("false");

  // setdata(prop.library);
  console.log(data[0]);

  return (
    <>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader != "true" && (
        <form className="form ">
          <div>
            <h1>
              સ્વ શ્રી મોતીભાઈ અમીન ગ્રંથાલય સેવા એવોર્ડ અને ઉત્તમ ગ્રંથાલય સેવા
              પ્રમાણપત્ર માટેની યોજના અન્વય મહિલા બાળ ગ્રંથાલયનો માપદંડો
            </h1>{" "}
          </div>

          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">
                ગ્રંથાલયનુ નામ :
              </label>
            </div>
            <div className="col-8">
              <input
                required
                type="text"
                className="form-control"
                
                  value={data[0].lname}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">જિલ્લો :</label>
            </div>
            <div className="col">
              <select required className="form-select" 
                  value={data[0].district}>
                <option selected disabled value="">
                  Select
                </option>
              </select>
            </div>
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">તાલુકો :</label>
            </div>
            <div className="col">
              <select required className="form-select" 
                  value={data[0].taluko}>
                <option selected disabled value="">
                  Select
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">ચાલુ વર્ષ :</label>
            </div>
            <div className="col">
              <select required className="form-select" 
                  value={data[0].currentyear}>
                <option selected disabled>
                  Select
                </option>
                <option>{year}</option>
                <option>{year - 1}</option>
                <option>{year - 2}</option>
                <option>{year - 3}</option>
                <option>{year - 4}</option>
                <option>{year - 5}</option>
              </select>
            </div>
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">નાણાકીય વર્ષ :</label>
            </div>
            <div className="col">
              <select required className="form-select">
                <option selected>{year}</option>
                <option>{year - 1}</option>
                <option>{year - 2}</option>
                <option>{year - 3}</option>
                <option>{year - 4}</option>
                <option>{year - 5}</option>
              </select>
            </div>
          </div>

          <div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયના વ્યવસ્થાતંત્રનો પ્રકાર/ રજી. નંબર
                  (ટ્રસ્ટ/સ્થાનિક/સ્વરાજની સંસ્થા/ સહકારી સંસ્થા):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  name="select_1"
                  value={data[0].select_1}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={1}>સહકારી સંસ્થા કે ટ્રસ્ટ હોય તો</option>
                  <option value={2}>સ્થાનિક સ્વરાજ્યની સંસ્થા હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_1}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  વ્યવસ્થાતંત્રનું પ્રદાન :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલય સમિતિની રચના કરેલ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_2"
                  value={data[0].select_2}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_2}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  ગ્રંથાલયની આવક અને ખર્ચની માહિતી :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ {currentyear.current && currentyear.current.value - 2} -{" "}
                  {currentyear.current && currentyear.current.value - 1} નો avak
                  :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_3"
                  value={data[0].select_97}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>0 થી 2,00,000</option>
                  <option value={1}>2,00,000 થી 2,50,000</option>
                  <option value={2}>2,50,000 થી 3,00,000</option>
                  <option value={3}>3,00,000 થી 3,50,000</option>
                  <option value={4}>3,50,000 થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_3}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ {currentyear.current && currentyear.current.value - 1} -{" "}
                  {currentyear.current && currentyear.current.value} નો avak :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_4"
                  value={data[0].select_98}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>0 થી 2,00,000</option>
                  <option value={1}>2,00,000 થી 2,50,000</option>
                  <option value={2}>2,50,000 થી 3,00,000</option>
                  <option value={3}>3,00,000 થી 3,50,000</option>
                  <option value={4}>3,50,000 થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_4}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ {currentyear.current && currentyear.current.value - 2} -{" "}
                  {currentyear.current && currentyear.current.value - 1} નો ખર્ચ
                  :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_3"
                  value={data[0].select_3}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>0 થી 2,00,000</option>
                  <option value={1}>2,00,000 થી 2,50,000</option>
                  <option value={2}>2,50,000 થી 3,00,000</option>
                  <option value={3}>3,00,000 થી 3,50,000</option>
                  <option value={4}>3,50,000 થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_3}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ {currentyear.current && currentyear.current.value - 1} -{" "}
                  {currentyear.current && currentyear.current.value} નો ખર્ચ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_4"
                  value={data[0].select_4}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>0 થી 2,00,000</option>
                  <option value={1}>2,00,000 થી 2,50,000</option>
                  <option value={2}>2,50,000 થી 3,00,000</option>
                  <option value={3}>3,00,000 થી 3,50,000</option>
                  <option value={4}>3,50,000 થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_4}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  કર્મચારી અંગેની માહિતી :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  કર્મચારીઓની સંખ્યા :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_5"
                  value={data[0].select_5}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>ગ્રંથપાલ+૩ થી વધુ કર્મચારી હોય</option>
                  <option value={3}>
                    ગ્રંથપાલ+ મદદનીશ સહાયક ગ્રંથપાલ + પટાવાળા{" "}
                  </option>
                  <option value={2}>ગ્રંથપાલ + પટાવાળા </option>
                  <option value={1}>ગ્રંથપાલ</option>
                  <option value={0}>કર્મચારી ન હોય</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_5}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથપાલની લાયકાત :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_6"
                  value={data[0].select_6}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>એમ.લીબ</option>
                  <option value={3}>બી.લીબ</option>
                  <option value={2}>ગ્રંથાલય સર્ટિફિકેટ કોર્ષ</option>
                  <option value={0}>ગ્રંથાલય વિજ્ઞાન ની લાયકાત ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_6}</h4>
              </div>
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પગારધોરણ અપાય છે :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_7"
                  value={data[0].select_7}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>પગારધોરણ અપાય છે</option>
                  <option value={2}>ફીક્સ પગાર</option>
                  <option value={0}>માનદ સેવા</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_7}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  માનદવેતન અપાય છે કેટલું? (માસિક):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_8"
                  value={data[0].select_8}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>0 થી 6000</option>
                  <option value={1}>6000 થી 7000</option>
                  <option value={2}>7000 થી 8000</option>
                  <option value={3}>8000 થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_8}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સેવાના લેખિત નિયમો છે ?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_9"
                  value={data[0].select_9}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_9}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  કર્મચારી કલ્યાણફંડની જોગવાઈ છે જેમકે પ્રોવિડન્ટ ફંડ/ વીમાનું
                  પ્રીમિયમ/ બોનસ ગ્રેજ્યુઇટી:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_10"
                  value={data[0].select_10}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_10}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયના પ્રવેશ આપેલ વંચનાલય વિભાગના નિયમો લેખિત છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_11"
                  value={data[0].select_11}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_11}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  મેચિંગ સહાય :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકો/ ફર્નિચર/ મકાન/ બાંધકામ માટે મળેલ સહાયની વિગત{" "}
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_12"
                  value={data[0].select_12}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_12}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકો/ ફર્નિચર/ મકાન/ બાંધકામ માટે મળેલ સહાયની વિગત
                  2021-2022 :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_13"
                  value={data[0].select_13}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_13}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  નોન મેચિંગ સહાય:{" "}
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  શતાબ્દી ઉજવણી માટે મળેલ સહાયની વિગતો? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_14"
                  value={data[0].select_14}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_14}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  ગ્રંથાલયના સમય અંગે :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તક આપેલ માટે સમય :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_15"
                  value={data[0].select_15}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>7 કલાક થી વધુ</option>
                  <option value={4}>6 થી 7</option>
                  <option value={3}>5 થી 6</option>
                  <option value={0}>5 થી 1</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_15}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વાંચાનાલય માટે નો સમય :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_16"
                  value={data[0].select_16}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>8 કલાક થી વધુ</option>
                  <option value={4}>7 થી 8</option>
                  <option value={3}>6 થી 7</option>
                  <option value={0}>6 થી 1</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_16}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  અઠવાડિક રજા ક્યારે હોય છે :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_17"
                  value={data[0].select_17}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>અઠવાડિક રજા ના હોય તો</option>
                  <option value={1}>સપ્તાહના એક દિવસ રજા હોય તો</option>
                  <option value={0}>રવિવારે રજા રખાતી હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_17}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  અઠવાડિક રાજાના દિવસે અપાતી સેવાઓની વિગત :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_18"
                  value={data[0].select_18}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>
                    પુસ્તક આપ-લે વાંચનાળાય સેવા આપતી હોય તો
                  </option>
                  <option value={1}>કોઈ એક સેવા અપાતી હોય તો</option>
                  <option value={0}>કોઈ પણ સેવા ન અપાતી હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_18}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ દરમ્યાન કામકાજના દિવસ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_19"
                  value={data[0].select_19}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>351 થી 365</option>
                  <option value={3}>321 થી 350</option>
                  <option value={2}>301 થી 320</option>
                  <option value={0}>300 થી less then 300</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_19}</h4>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  ગ્રંથભંડાર અને ગ્રંઠગોઠવાણી :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયનાં ગ્રંથસંગ્રાની માહિતી કુલગ્રંથસંખ્યા :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_20"
                  value={data[0].select_20}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}> 50,001 થી વધુ</option>
                  <option value={3}>35,001 થી 50,000સુધી</option>
                  <option value={2}>30,001 થી 35,000સુધી</option>
                  <option value={1}>30,000 થી 25,000સુધી</option>
                  <option value={0}>25,000 થી 0ઓછા</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_20}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  બે વર્ષ દરમિયાન નવા ઉમેરાયેલા ગ્રંથોની સંખ્યા :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_21"
                  value={data[0].select_21}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>201 થી વધુ ઉમેરાયેલા હોય તો </option>
                  <option value={2}>101 થી 200 પુસ્તકો ઉમેરાયેલ હોય તો</option>
                  <option value={1}>100 પુસ્તકો ઉમેરાયેલ હોય તો</option>
                  <option value={0}>100 ઓછા ઉમેરાયેલ હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_21}</h4>
              </div>
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  અગ્રંથ વાંચન સામગ્રીની વિગત :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_22"
                  value={data[0].select_22}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>અગ્રંથ વાંચન સામગ્રી પૂરતી હોય તો</option>
                  <option value={1}>અગ્રંથ વાંચન સામગ્રી પૂરતી ન હોય તો</option>
                  <option value={0}>અગ્રંથ વાંચન સામગ્રી ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_22}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગામની વસ્તીના પ્રમાણમાં કુલ ગ્રંથોની ટકાવારી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_23"
                  value={data[0].select_23}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>40%</option>
                  <option value={3}>30 થી 39%</option>
                  <option value={2}>15 થી 29%</option>
                  <option value={1}>5 થી 14%</option>
                  <option value={0}>5% થી</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_23}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ભણેલ વસ્તીના પ્રમાણમાં સભ્યની ટકાવારી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_24"
                  value={data[0].select_24}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>5 થી 14%</option>
                  <option value={1}>15 થી 20%</option>
                  <option value={2}>21 થી 30%</option>
                  <option value={3}>31 થી 40%</option>
                  <option value={4}>40 થી 50%</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_24}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  નોંધાયેલા સભ્યના પ્રમાણમાં વાંચકો ને ગ્રંથનું પ્રમાણ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_25"
                  value={data[0].select_25}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>24</option>
                  <option value={3}>18 થી 23</option>
                  <option value={2}>12 થી 17</option>
                  <option value={1}>6 થી 11</option>
                  <option value={0}>3 કે તેથી ઓછું</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_25}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગામની ભણેલ વસ્તીના પ્રમાણમાં કુલ ગ્રંથોની ટકાવારી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_26"
                  value={data[0].select_26}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>10%</option>
                  <option value={3}>8%</option>
                  <option value={2}>6%</option>
                  <option value={1}>4%</option>
                  <option value={0}>3% થી ઓછું</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_26}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગામની ભણેલ વસ્તીના પ્રમાણમાં ઘરે આપેલ ગ્રંથોની ટકાવારી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_27"
                  value={data[0].select_27}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>10%</option>
                  <option value={3}>8%</option>
                  <option value={2}>6%</option>
                  <option value={1}>4%</option>
                  <option value={0}>3% થી ઓછું</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_27}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વસાવેલ ગ્રંથોના પ્રમાણમાં વંચાયેલ ગ્રંથોની ટકાવારી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_28"
                  value={data[0].select_28}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>100%</option>
                  <option value={3}>80%</option>
                  <option value={2}>60%</option>
                  <option value={1}>30%</option>
                  <option value={0}>option 2</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_28}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથગોઠવણીની વિગત -(વિષયવાર/લેખનવાર/જનરલ રજીસ્ટરના ક્રમમાં) :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_29"
                  value={data[0].select_29}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>વિષયવાર/લેખનવાર હોય તો</option>
                  <option value={1}>જનરલ રજીસ્ટર હોય તો</option>
                  <option value={0}>ગ્રંથ ગોઠવણી. અવ્યવસ્થિત હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_29}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકો ખુલ્લા કબાટમાં રાખવામાં આવે છે કે બંધ કબાટમાં -:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_30"
                  value={data[0].select_30}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>ખુલ્લા કબાટમાં</option>
                  <option value={0}>બંધ કબાટમાં</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_30}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વિષય તેમજ લેખકોનો નિર્દેશ કરતા માર્ગદર્શકો લગાવામાં આવેલ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_31"
                  value={data[0].select_31}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_31}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  કોમ્પ્યુટરાઈઝેશન કરવામાં આવેલ છે કે કેમ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_34"
                  value={data[0].select_34}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_34}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ક્યા સોફ્ટવેરનો ઉપયોગ કરેલ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_35"
                  value={data[0].select_35}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>અધિકૃત બ્રાન્ડ સોફ્ટવેર હોય તો</option>
                  <option value={1}>સેલ્ફ પેડ(પોતાની પદ્ધતિ)</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_35}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  કઈ કઈ બાબતોનું કોમ્પ્યુટરાઈઝેશન થયેલ છે? ૧. ગ્રંથ નોંધણી ૨.
                  સભ્ય નોંધણી ૩. સામયિક નોંધણી ૪. સૂચિકરણ ૫. ગ્રંથ આપ- લે ૬.
                  વાચકોને સમૃતિપત્રો ૭. અતિદેય ગણત્રી ૮.ગ્રંથાલયના હિસબો ૯.
                  ગ્રંથાલયની આકડાકીય માહિતી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_36"
                  value={data[0].select_36}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>
                    તમામ કામગીરી કોમ્પ્યુટરાઈઝેશન થતી હોય તો
                  </option>
                  <option value={2}>અંશતઃ કામગીરી થતી હોય તો</option>
                  <option value={0}>ન થતી હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_36}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ઇ લાયબ્રેરી સુવિધા ઉપલબ્ધ છે? ૧. ઇ- બુકસ ૨. ઇ - જનૅલ્સ ૩. ઇ -
                  મટીરીયલ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_37"
                  value={data[0].select_37}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_37}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તક પસંદગીની સમિતિની રચના કરેલ છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_38"
                  value={data[0].select_38}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_38}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તક ખરીદી માટે વિક્રેતાઓ પાસેથી વો મંગાવાય છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_39"
                  value={data[0].select_39}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_39}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તક પસંદગી માટે ક્યા સાધનોનો ઉપયોગ કરાય છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_40"
                  value={data[0].select_40}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_40}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  નવા ઉમેરાતા પુસ્તકોની યાદી નોટીસબોર્ડ ઉપર મુકાઈ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_41"
                  value={data[0].select_41}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_41}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકોની નોંધણી નમૂનાના પરિગ્રહણ રજીસ્ટરમાં થાય છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_42"
                  value={data[0].select_42}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>હા નિયત નમૂનામાં</option>
                  <option value={1}>જો હા પણ નિયત નમૂનામાં ન હોય તો</option>
                  <option value={0}>નોંધાતા ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_42}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકોની નોંધણીની કામગીરી પડતર છે તો કેટલી? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_43"
                  value={data[0].select_43}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>હા</option>
                  <option value={2}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_43}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  બે વર્ષ દરમિયાન ગ્રંથ ખરીદી પાછળ ખર્ચ:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_44"
                  value={data[0].select_44}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>50001થી વધુ</option>
                  <option value={3}>40001થી 50000 </option>
                  <option value={2}>30001થી 40000</option>
                  <option value={1}>25001થી 30000</option>
                  <option value={0}>25000થી ઓછા હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_44}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથો ઉપર યોગ્ય સ્થાને સિક્કા તથા નિયત જગ્યાએ પીઠપટ્ટી
                  લગાવવામાં આવે છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_32"
                  value={data[0].select_32}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_32}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકોનું વર્ગીકરણ કઈ પધ્ધતિથી કરવામાં આવે છે?
                  (દશાંશ/બોર્ડન/દીબિંદુ કે અન્ય પધ્ધતિ):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_33"
                  value={data[0].select_33}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>શાસ્ત્રીય પદ્ધતિ?</option>
                  <option value={1}>સ્થાનિક પદ્ધતિ?</option>
                  <option value={0}>ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_33}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ગીકરણ માટે કેટલા પુસ્તકોની કાર્યવાહી બાકી છે ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_45"
                  value={data[0].select_45}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>બાકી હોય તો</option>
                  <option value={3}>પૂર્ણ થયેલ છે</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_45}</h4>
              </div>
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પુસ્તકોનું સુચિકરણ કઈ પધ્ધતિથી કરવામાં આવે છે? (કોમ્પ્યુટર
                  પ્રોગ્રામથી/ કાર્ડપધ્ધતિથી/ રજિસ્ટર્ડ પધ્ધતિથી) :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_46"
                  value={data[0].select_46}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>કોમ્પ્યુટર OPAC હોય તો</option>
                  <option value={2}>સૂચિ કાર્ડ પદ્ધતિ</option>
                  <option value={1}>રજિસ્ટર હોય તો</option>
                  <option value={0}>કોઈ પદ્ધતિ ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_46}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સુચિકરણ માટે કેટલા પુસ્તકોની કાર્યવાહી બાકી છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_47"
                  value={data[0].select_47}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>બાકી હોય તો</option>
                  <option value={2}>પૂર્ણ થયેલ છે</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_47}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથો આપલે માટેની કઈ પધ્ધતિ અમલમાં છે?(ખાતાવહી, રજીસ્ટર,
                  ટિકિટ પધ્ધતિ કે કોમ્પ્યુટર પ્રોગ્રામ દ્વાર):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_48"
                  value={data[0].select_48}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>કોમ્પ્યુટરાઇઝ/ટિકિટ પદ્ધતિ</option>
                  <option value={2}>ખાતાવહી પદ્ધતિ</option>
                  <option value={1}>દૈનિક રજીસ્ટર પદ્ધતિ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_48}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વાચકોને કેટલા દિવસ માટે પુસ્તકો વાંચવા આપય છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_49"
                  value={data[0].select_49}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>૧૪ દિવસ અને તેથી વધુ</option>
                  <option value={0}>૧૪ થી ઓછા</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_49}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  નિયત મુદ્દતમાં પુસ્તક પરત ન આવે તે લેઇટ ફી લેવાય છે?કેટલી?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_50"
                  value={data[0].select_50}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_50}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  નિયત મુદ્દતમાં પુસ્તક પાયા ન આવે તો સ્મૃતિપત્રો લખાય છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_51"
                  value={data[0].select_51}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_51}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વાચકને જોઈતુ પુસ્તક મેળવી શકે તે માટે અગાઉથી પુસ્તક રિઝર્વ
                  કરવવાની સગવડ અપાય છે? કેવી રીતે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_52"
                  value={data[0].select_52}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_52}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ઘરે વાંચવા આપેલ પુસ્તકોની કુલ સંખ્યા:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_53"
                  value={data[0].select_53}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>૨૫,૦૦૧ કરતા વધુ</option>
                  <option value={3}>૧૫૦૦૧ થી ૨૫૦૦૦ હોય તો</option>
                  <option value={2}>૧૦૦૦૧ થી ૧૫૦૦૦ હોય તો</option>
                  <option value={1}>૧૦૦૦૦ થી ઓછા હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_53}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  આંતર ગ્રંથાલય લોનની સુવિધા છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_54"
                  value={data[0].select_54}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_54}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયમાં અલગ સંદર્ભ વિભાગ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_55"
                  value={data[0].select_55}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_55}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સંદર્ભગ્રંથોની સંખ્યા:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_56"
                  value={data[0].select_56}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>૫૦૦ થી ૧૦૦૦</option>
                  <option value={1}>૧૦૦૦ થી ૧૫૦૦ હોય તો</option>
                  <option value={2}>૧૫૦૦ થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_56}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  અપાતી સંદર્ભસેવાની નોંધ માટે આલગ રજીસ્ટર રખાઇ છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_57"
                  value={data[0].select_57}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={1}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_57}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સંદર્ભસેવાનો લાભ લેનાર વાચકોની વાર્ષિક સંખ્યા:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_58"
                  value={data[0].select_58}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={5}>વાર્ષિક ૨૦૦૦ થી વધુ</option>
                  <option value={4}>વાર્ષિક ૧૫૦૦ થી ૨૦૦૦</option>
                  <option value={3}>વાર્ષિક ૧૦૦૦ થી ૧૫૦૦</option>
                  <option value={0}>વાર્ષિક ૧૦૦૦ થી ઓછા</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_58}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ઝેરોક્ષ કે એવી કોઈ સુવિધા અપાય છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_59"
                  value={data[0].select_59}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_59}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયમાં મંગાવતા દેનિકોની સંખ્યા (બને વર્ષોની સરેરાશ):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_60"
                  value={data[0].select_60}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>૫ હોય તો</option>
                  <option value={3}>૬ થી ૧૦ હોય તો</option>
                  <option value={5}>૧૦ થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_60}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયમાં મંગાવતા સામાયકોની સંખ્યા (બને વર્ષોની સરેરાશ) :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_61"
                  value={data[0].select_61}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>૨૦ સામયિકો</option>
                  <option value={1}>૨૧ થી ૩૦ સામયિકો</option>
                  <option value={2}>૩૧ થી ૪૦ સામયિકો</option>
                  <option value={4}>૪૧ થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_61}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  દૈનિકપત્રો માટેનો ખર્ચ:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_62"
                  value={data[0].select_62}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>૨૦ થી વધુ</option>
                  <option value={2}>૧૫ થી ૨૦ હજાર</option>
                  <option value={1}>૮ થી ૧૫ હજાર</option>
                  <option value={0}>૭ હજાર</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_62}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સામયિકો માટેનો ખર્ચ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_63"
                  value={data[0].select_63}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>૧૦૦૦૦ ૱</option>
                  <option value={1}>૧૦ થી ૧૫ હજાર</option>
                  <option value={2}>૧૫ થી ૨૦ હજાર</option>
                  <option value={3}>૨૦ થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_63}</h4>
              </div>
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વંચનાલાયમાં આવતા વાચકોની નોંધ માટે રજિસ્ટર રાખવામાં આવે છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_64"
                  value={data[0].select_64}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={1}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_64}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયમાં માંગવામાં આવતા સામાયિકો પૈકી બંધાવીને સાચવવામાં
                  આવતા સામયિકોની યાદી :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_65"
                  value={data[0].select_65}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_65}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  બંધાયેલ સામયિકો વાચકોને પુસ્તક સ્વરૂપે ઇસ્યુ કરાય છે?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_66"
                  value={data[0].select_66}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_66}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સામયિકના જૂના અંકો વેચાણ મુકાય છે ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_67"
                  value={data[0].select_67}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_67}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સામયિકના જૂના અંકો વેચાણ મુકાય છે ?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_68"
                  value={data[0].select_68}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>રાહતદરથી વેચાણ માટે મુકાય છે તો</option>
                  <option value={0}>
                    રાહતદરથી વેચાણ માટે નથી મુકાતા અને પસ્તીમાં વેચાય છે તો
                  </option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_68}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  મહિલા સભ્યો માટે અલગ વિભાગ છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_69"
                  value={data[0].select_69}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_69}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  બાળ સભ્યો માટે અલગ વિભાગ છે :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_70"
                  value={data[0].select_70}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_70}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  મહિલા સભ્યો માટે અપાતી વિશિષ્ટ સેવાની વિગતો:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_71"
                  value={data[0].select_71}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_71}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વેકેશનમાં બાળકો માટે અપાતી સેવાઓ કે થતી પધ્ધતિઓ અંગેની વિગતો:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_72"
                  value={data[0].select_72}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_72}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  સભ્યનોંધણી માટે કઈ પધ્ધતિ - અમલમાં છે? (કોમ્પ્યુટર
                  પ્રોગ્રામ/સભ્ય પ્રોગ્રામ/રજીસ્ટરમાં નોંધણી/ અન્ય):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_73"
                  value={data[0].select_73}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>કોમ્પ્યુટર પ્રોગ્રામ</option>
                  <option value={2}>સભ્ય ફોર્મ</option>
                  <option value={1}>રજીસ્ટરમાં નોંધીને</option>
                  <option value={0}>ન નોંધાતા હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_73}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  જામીનગીરી લેવાય છે :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_96"
                  value={data[0].select_96}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_96}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ડિપોઝિટ લેવાય છે?કેટલી?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_74"
                  value={data[0].select_74}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>નથી લેવાતી</option>
                  <option value={2}>1રૂ થી 50રૂ </option>
                  <option value={1}>51રૂ થી 100રૂ </option>
                  <option value={0}>100રૂ થી વધુ</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_74}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  બાળ સભ્યો ની ડિપોઝિટ લેવાય છે?કેટલી? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_75"
                  value={data[0].select_75}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>ના લેવાતી હોય તો</option>
                  <option value={2}>૧રૂ થી ૧૦રૂ </option>
                  <option value={1}>૧૧રૂ થી ૩૦રૂ </option>
                  <option value={0}>૩૦રૂ થી વધુ</option>
                </select>
              </div>

              <div className="col-2">
                <h4>{data[0].select_75}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  લવાજમ લેવાય છે? કેટલું?(માસિક/વાર્ષિક):
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_76"
                  value={data[0].select_76}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>વાર્ષિક લવાજમ ન લેવાતું હોય તો</option>
                  <option value={3}>વાર્ષિક લવાજમ ૧ થી ૨૫ સુધી લેવાય તો</option>
                  <option value={2}>વાર્ષિક લવાજમ ૨૬ થી ૫૦ હોય તો </option>
                  <option value={0}>વાર્ષિક લવાજમ ૫૦ થી વધુ હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_76}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ દરમ્યાન રદ થયેલ સભ્યોની સંખ્યાં :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_77"
                  value={data[0].select_77}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>કોઈ પણ રદ ન થતાં હોય તો</option>
                  <option value={2}>૧ થી ૨૦ સભ્યો રદ થયા હોય તો</option>
                  <option value={1}>૨૧ થી ૩૦ સભ્યો રદ થયા હોય તો</option>
                  <option value={0}>૩૦ થી વધુ સભ્યો રદ થયા હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_77}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથલાયના સભ્યોની સંખ્યા:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_78"
                  value={data[0].select_78}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={4}>૪૦૦૧ થી વધુ</option>
                  <option value={3}>૩૦૦૧ થી ૪૦૦૦ સુધી</option>
                  <option value={2}>૨૦૦૧ થી ૩૦૦૦ સુધી</option>
                  <option value={1}>૧૦૦૧ થી ૨૦૦૦ સુધી</option>
                  <option value={0}>૧૦૦૧ થી ૨૦૦૦ સુધી</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_78}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલય વિસ્તરણ પ્રવૃતિઓનું આયોજન થાય છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_79"
                  value={data[0].select_79}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_79}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  વર્ષ દરમિયાન કેટલા અને કેવા કાર્યક્રમો કર્યા? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_80"
                  value={data[0].select_80}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={0}>એક પણ કાર્ય કરેલ ન હોય તો</option>
                  <option value={2}>૫ સુધી કાર્યક્રમ કરેલ હોય તો</option>
                  <option value={3}>૬ થી ૧૦ કાર્યક્રમ કરેલ હોય તો</option>
                  <option value={4}>૧૦ થી વધુ કાર્યક્રમ કરેલ હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_80}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  લોકો જોઈ શકે તે રીતે ગ્રંથાલય બહાર નામ દર્શાવતું બોર્ડ રાખેલ
                  છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_81"
                  value={data[0].select_81}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_81}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયનો સમય તથા અઠવાડિક સમય ની માહિતી અને નિયમો પ્રદર્શિત
                  કરેલ છે :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_82"
                  value={data[0].select_82}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_82}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  મકાન પૂરતી હવા ઉજાસવાળુ છે?
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_83"
                  value={data[0].select_83}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_83}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  મકાનમાં વાચકો માટે પ્રાથમિક જરૂરિયાતની સુવિધા છે કે કેમ?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_84"
                  value={data[0].select_84}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_84}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  મકાનમાં દરેક સ્થળે પૂરતી સફાઈ રાખવામાં આવે છે કે કેમ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_85"
                  value={data[0].select_85}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_85}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયોમાં જંતુનાશક દવાઓનો નિયમિત છંટકાવ થાય છે કે કેમ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_86"
                  value={data[0].select_86}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_86}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  પરત આવેલા પુસ્તક ગ્રંથભંડારમાં સમયસર ગોઠવાય છે કે કેમ?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_87"
                  value={data[0].select_87}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_87}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથપાલનો વાંચકો સાથેનો વ્યવહાર સોજન્ય પૂર્ણ જણય છે કે કેમ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_88"
                  value={data[0].select_88}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_88}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલય માં વીઝીટ બુક રાખવામાં આવે છે ? તેમાં ગ્રંથાલયમાં
                  આવતી પ્રતિષ્ઠિત વ્યક્તિઓના મંતવ્યો નોંધાયેલ છે:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_89"
                  value={data[0].select_89}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_89}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  છેલ્લે નોંધ ક્યારે થયેલ છે? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_90"
                  value={data[0].select_90}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>સંતોષકારક અને અદ્યતન નિભાવે છે</option>
                  <option value={0}>સંતોષકારક અને અદ્યતન નિભાવે નથી</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_90}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયમાં નિભાવવામાં આવતા રજિસ્ટરો અને અન્ય દફતર અધ્યતનન
                  રખાય છે? કે કેમ?:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_91"
                  value={data[0].select_91}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={3}>હા</option>
                  <option value={1}>સંતોષકારક ન નિભાવેલ હોય તો</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_91}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયની અગાઉ કરાયેલ તપાસણી દરમ્યાન આપવામાં આવેલ વાંધાઓની
                  પૂર્તતા કરેલ છે કે કેમ? :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_92"
                  value={data[0].select_92}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_92}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલય દ્વારા અપાતી વિશિષ્ટ સેવાઓ/પ્રવૃત્તિ ઉલ્લેખપાત્ર કોઈ
                  વિશેષતા કે પધ્ધતી હોય તો તેની વિગતો :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_93"
                  value={data[0].select_93}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>હા</option>
                  <option value={0}>ના</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_93}</h4>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયના વિકાસ માટે વ્યવસ્થા થી ધગશ અને નવીન વિકાસ યોજના કોઈ
                  એક હોયતે તેની વિગત:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_94"
                  value={data[0].select_94}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>
                    વ્યવસ્થાતંત્રની ધગશ અને વિશિષ્ટ યોજના હોઈ તો
                  </option>
                  <option value={1}>યોજના હોય પણ સંતોષકારક પ્રગતિ ન હોય</option>
                  <option value={0}>કોઈ યોજના ન હોય તો</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_94}</h4>
              </div>
              <div className=" col">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલય માટે નાણાકીય સ્ત્રોતોનો વધારવા વ્યવસ્થાતંત્ર દ્વારા
                  કોઈ વિશિષ્ટ પ્રવાસો થયા હોય તો તેની વિગત:
                </label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="select_95"
                  value={data[0].select_95}
                  className="form-select"
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value={2}>
                    પૂરતા પ્રયાસો થતાં હોય અને નાણાકીય સ્ત્રોત વધારેલ હોય તો
                  </option>
                  <option value={0}>કોઈ જ પ્રયત્નો ન હોય</option>
                </select>
              </div>
              <div className="col-2">
                <h4>{data[0].select_95}</h4>
              </div>
            </div>

            <center>
              <div className="row mb-3 tab2 col-sm-13 align-items-center">
                <div className=" col">
                  <Link to="/">
                    <button type="button" className="btn btn-warning">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </center>
          </div>
        </form>
      )}
    </>
  );
}
export default Motibhaiamin1result;
