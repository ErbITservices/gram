import "../pages/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
function Addnew() {
  const [loader, setloader] = useState("false");

  const pdfref = useRef();
  const downloadpdf = useReactToPrint({
    content: () => pdfref.current,
    documentTitle: "Ahevalform",
  });

  const navigate = useNavigate();
  const d = new Date();
  let year = d.getFullYear();
  
  const librarydistrict = useRef();
  const [data, setdata] = useState({
    uid: "",
    lname: "",
    gam: "",
    pin: "",
    taluko: "",
    sthapnadate: "",
    district: "",
    registernumber: "",
    emailmen: "",
    emailmenaddres: "",
    libraryen: "",
    libraryenaddres: "",
    libraryeneducation: "",
    email: "",
    phone: "",
    pholibrarystatusne: "",
  });


 const districtlist = [
   "AHMADABAD",
   "AMRELI",
   "ANAND",
   "ARAVALLI",
   "BANASKANTHA",
   "BHARUCH",
   "BHAVNAGAR",
   "BOTAD",
   "CHHOTA UDEPUR",
   "DAHOD",
   "DANGS",
   "DEVBHUMI DWARKA",
   "GANDHINAGAR",
   "GIR SOMNATH",
   "JAMNAGAR",
   "JUNAGADH",
   "KACHCHH",
   "KHEDA",
   "MAHESANA",
   "MAHISAGAR",
   "MORBI",
   "NARMADA",
   "NAVSARI",
   "PANCHMAHALS",
   "PATAN",
   "PORBANDAR",
   "RAJKOT",
   "SABARKANTHA",
   "SURAT",
   "SURENDRANAGAR",
   "TAPI",
   "VADODARA",
   "VALSAD",
 ];

 const AHMADABAD = [
   "Ahmedabad City",
   "Daskroi",
   "Sanand",
   "Bavla",
   "Vijapur",
   "Sankheda",
   "Kotda Sangani",
   "Naroda",
   "Vastrapur",
   "Bholav",
   "Sarkhej",
 ];
 const AMRELI = [
   "Amreli",
   "Babra",
   "Dhari",
   "Lathi",
   "Rajula",
   "Savarkundla",
   "Vallabhipur",
   "Kunkavav",
   "Khambhalida",
   "Sihor",
 ];
 const ANAND = [
   "Anand",
   "Borsad",
   "Khambhat",
   "Sojitra",
   "Tarapur",
   "Vallabh Vidyanagar",
 ];

 const ARAVALLI = [
   "Modasa",
   "Malpur",
   "Bayad",
   "Kapadvanj",
   "Dhansura",
   "Garbada",
 ];
 const BANASKANTHA = [
   "Deesa",
   "Palanpur",
   "Tharad",
   "Danta",
   "Vav",
   "Lakhani",
   "Kankrej",
   "BanasKantha",
 ];
 const BHARUCH = [
   "Bharuch",
   "Ankleshwar",
   "Dediapada",
   "Jhagadia",
   "Amod",
   "Narmada",
 ];
 const BHAVNAGAR = [
   "Bhavnagar",
   "Bhavnagar Rural",
   "Gadhada",
   "Mahuva",
   "Sihor",
   "Palitana",
   "Valia",
   "Umrala",
 ];
 const BOTAD = ["Botad", "Barwala", "Ranpur", "Sihor"];
 const CHHOTA_UDEPUR = ["Chhota Udepur", "Bodeli", "Pavi Jetpur", "Sukhsada"];
 const DAHOD = [
   "Dahod",
   "Devgad Baria",
   "Limkheda",
   "Sanjeli",
   "Dhanpur",
   "Jhalod",
 ];
 const DANGS = ["Dangs", "Ahwa", "Saputara", "Subir"];
 const DEVBHUMI_DWARKA = [
   "Dwarka",
   "Okhamandal",
   "Bet Dwarka",
   "Mundra",
   "Kalyanpur",
 ];
 const GANDHINAGAR = ["Gandhinagar", "Kalol", "Mansa", "Dehgam", "Khanpur"];
 const GIR_SOMNATH = [
   "Veraval",
   "Gir Gadhada",
   "Talala",
   "Sutrapada",
   "Prabhas Patan",
 ];
 const JAMNAGAR = [
   "Jamnagar",
   "Kalavad",
   "Jodiya",
   "Khambhalia",
   "Lakhata",
   "Dhrol",
   "Sihor",
 ];
 const JUNAGADH = [
   "Junagadh",
   "Manavadar",
   "Keshod",
   "Bavka",
   "Upleta",
   "Dharangadhra",
   "Mendarada",
   "Talala",
 ];
 const KACHCHH = [
   "Bhuj",
   "Anjar",
   "Bhachau",
   "Mandvi",
   "Nakhatrana",
   "Kutchhadi",
   "Lakhpat",
   "Mundra",
   "Rapar",
 ];
 const KHEDA = ["Kheda", "Nadiad", "Matar", "Kapadvanj", "Mahudha", "Dholka"];
 const MAHESANA = [
   "Mehsana",
   "Kadi",
   "Unjha",
   "Visnagar",
   "Vadnagar",
   "Ahmedabad",
 ];
 const MAHISAGAR = [
   "Lunawada",
   "Gadkhol",
   "Mahisagar",
   "Santrampur",
   "Khodamba",
 ];
 const MORBI = [
   "Morbi",
   "Wankaner",
   "Nawab Nagar",
   "Maliya Hatina",
   "Ranjit Nagar",
   "Halvad",
 ];
 const NARMADA = ["Narmada", "Dediapada", "Jhagadia", "Rajpipla", "Sagbara"];
 const NAVSARI = ["Navsari", "Bansda", "Gandevi", "Chikhli", "Khergam"];
 const PANCHMAHALS = [
   "Godhra",
   "Halol",
   "Madhya Gujarat",
   "Pavagadh",
   "Sankheda",
   "Kalol",
   "Sihor",
 ];
 const PATAN = ["Patan", "Sidhpur", "Harij", "Radhanpur", "Sihor"];
 const PORBANDAR = ["Porbandar", "Madhavpur", "Kutiyana", "Ranavav", "Bhanvad"];
 const RAJKOT = [
   "Rajkot",
   "Upleta",
   "Jasdan",
   "Gondal",
   "Paddhari",
   "Kotda Sangani",
   "Dhank",
 ];
 const SABARKANTHA = [
   "Himmatnagar",
   "Idar",
   "Khedbrahma",
   "Modasa",
   "Prantij",
   "Talod",
   "Bayad",
 ];
 const SURAT = [
   "Surat",
   "G Surat",
   "Bardoli",
   "Olpad",
   "Mandvi",
   "Kamrej",
   "Utran",
   "Ichchhpur",
 ];
 const SURENDRANAGAR = [
   "Surendranagar",
   "Wadhwan",
   "Dhrangadhra",
   "Chotila",
   "Muli",
   "Ratanpur",
   "Limbdi",
   "Mandvi",
 ];
 const TAPI = ["Vyara", "Songadh", "Tapi", "Madhya Tapi"];
 const VADODARA = [
   "Vadodara",
   "Savli",
   "Karjan",
   "Waghodia",
   "Ankleshwar",
   "Padra",
   "Vaghodia",
 ];
 const VALSAD = ["Valsad", "Dharampur", "Pardi", "Vapi", "Umargam", "Khergam"];
 const [listtaluka, setlisttaluka] = useState([]);

 function handlesettaluka() {
   if (librarydistrict.current.value === "AHMADABAD") {
     setlisttaluka(AHMADABAD);
   } else if (librarydistrict.current.value === "AMRELI") setlisttaluka(AMRELI);
   else if (librarydistrict.current.value === "ANAND") setlisttaluka(ANAND);
   else if (librarydistrict.current.value === "ARAVALLI")
     setlisttaluka(ARAVALLI);
   else if (librarydistrict.current.value === "BANASKANTHA")
     setlisttaluka(BANASKANTHA);
   else if (librarydistrict.current.value === "BHARUCH") setlisttaluka(BHARUCH);
   else if (librarydistrict.current.value === "BHAVNAGAR")
     setlisttaluka(BHAVNAGAR);
   else if (librarydistrict.current.value === "BOTAD") setlisttaluka(BOTAD);
   else if (librarydistrict.current.value === "CHHOTA UDEPUR")
     setlisttaluka(CHHOTA_UDEPUR);
   else if (librarydistrict.current.value === "DAHOD") setlisttaluka(DAHOD);
   else if (librarydistrict.current.value === "DANGS") setlisttaluka(DANGS);
   else if (librarydistrict.current.value === "DEVBHUMI DWARKA")
     setlisttaluka(DEVBHUMI_DWARKA);
   else if (librarydistrict.current.value === "GANDHINAGAR")
     setlisttaluka(GANDHINAGAR);
   else if (librarydistrict.current.value === "GIR SOMNATH")
     setlisttaluka(GIR_SOMNATH);
   else if (librarydistrict.current.value === "JAMNAGAR")
     setlisttaluka(JAMNAGAR);
   else if (librarydistrict.current.value === "JUNAGADH")
     setlisttaluka(JUNAGADH);
   else if (librarydistrict.current.value === "KHEDA") setlisttaluka(KHEDA);
   else if (librarydistrict.current.value === "KACHCHH") setlisttaluka(KACHCHH);
   else if (librarydistrict.current.value === "MAHESANA")
     setlisttaluka(MAHESANA);
   else if (librarydistrict.current.value === "MAHISAGAR")
     setlisttaluka(MAHISAGAR);
   else if (librarydistrict.current.value === "MORBI") setlisttaluka(MORBI);
   else if (librarydistrict.current.value === "NARMADA") setlisttaluka(NARMADA);
   else if (librarydistrict.current.value === "NAVSARI") setlisttaluka(NAVSARI);
   else if (librarydistrict.current.value === "PANCHMAHALS")
     setlisttaluka(PANCHMAHALS);
   else if (librarydistrict.current.value === "PATAN") setlisttaluka(PATAN);
   else if (librarydistrict.current.value === "PORBANDAR")
     setlisttaluka(PORBANDAR);
   else if (librarydistrict.current.value === "RAJKOT") setlisttaluka(RAJKOT);
   else if (librarydistrict.current.value === "SABARKANTHA")
     setlisttaluka(SABARKANTHA);
   else if (librarydistrict.current.value === "SURAT") setlisttaluka(SURAT);
   else if (librarydistrict.current.value === "SURENDRANAGAR")
     setlisttaluka(SURENDRANAGAR);
   else if (librarydistrict.current.value === "TAPI") setlisttaluka(TAPI);
   else if (librarydistrict.current.value === "VADODARA")
     setlisttaluka(VADODARA);
   else if (librarydistrict.current.value === "VALSAD") setlisttaluka(VALSAD);
 } 

  const [pd, setpd] = useState([]);
  const [count, setcount] = useState();

  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(
          `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
            "district"
          )}`
        );
        console.log(response.data), setpd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
    const getcount = async () => {
      try {
        const response = await axios.get(
          `https://gramgranthalay-backend-2.onrender.com/Count/Count`
        );
        console.log(response.data[0].count), setcount(response.data[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getcount();
  }, []);

  // let Uid = "VAD000" ;
  const [Uid, setUid] = useState("");
  const handleInput = (e) => {
    // console.log(e);
    console.log("count is " + count);
    // console.log(pd.length);
    // console.log(editvalu);

    const name = e.target.name;
    const value = e.target.value;

    if (edit == "true") {
      seteditvalue({
        ...data,
        [name]: value,
        ["uid"]: editvalu.uid,
      });
    }

    setdata({
      ...data,
      [name]: value,
      ["uid"]: Uid,
    });

    if (count > 99) {
      // Uid = ;
      setUid(localStorage.getItem("code") + "0" + count);
    } else {
      setUid(localStorage.getItem("code") + "00" + count);
    }
    setUidset("false");
    console.log(data);
  };
  let [Uidset, setUidset] = useState("false");
  let [list, setlist] = useState([]);

  const handleSubmit = async () => {
    // console.log(data);
    setloader("true");
    try {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
              "district"
            )}`
          );
          console.log(
            `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
              "district"
            )}`
          );

          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      if (pd.length > 99) {
        // Uid = ;
        setUid(localStorage.getItem("code") + "0" + count);
      } else {
        setUid(localStorage.getItem("code") + "00" + count);
      }
      setUidset("true");

      console.log(list);
      console.log();

      const senddata = await fetch(
        `https://gramgranthalay-backend-2.onrender.com/form/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (senddata.ok) {
        console.log(data);
        setdata({
          uid: "",
          lname: "",
          gam: "",
          pin: "",
          taluko: "",
          categoryoflibrary: "",
          sthapnadate: "",
          district: "",
          registernumber: "",
          emailmen: "",
          emailmenaddres: "",
          libraryen: "",
          libraryenaddres: "",
          libraryeneducation: "",
          libraryensalary: "",
          librarystatus:"",
        });
        let templist = [
          ...list,
          {
            name: data.lname,
            uid: data.uid,
            lname: "",
            gam: data.gam,
            pin: data.pin,
            taluko: data.taluko,
            categoryoflibrary: data.categoryoflibrary,
            sthapnadate: data.sthapnadate,
            district: data.district,
            registernumber: data.registernumber,
            emai: data.email,
            emailmenaddres: data.emailmenaddres,
            phone: data.phone,
            librarystatus:data.librarystatus,
            libraryenaddres: "",
          },
        ];
        setlist(templist);
        const dataget = async () => {
          try {
            const response = await axios.get(
              `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
                "district"
              )}`
            );
            console.log(response.data), setpd(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        dataget();
        // navigate("/showid", { state: { id: Uid } });
        // navigate("/Home1");
        setloader("false");
      }
      try {
        console.log("mihir");
        let ind = count + 1;
        // setcount({count: ind + 1})
        const senddata = await fetch(
          `https://gramgranthalay-backend-2.onrender.com/Count/${count} `,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ count: ind }),
          }
        );
        if (senddata.ok) {
          console.log("done " + count);

          setloader("false");
        }
      } catch (error) {
        console.log("error");
        console.log(error);
        alert("data not submited try again");
        setloader("false");
      }
    } catch (error) {
      console.log("error");
      console.log(error);
      setloader("false");
      alert("data not submited");
    }
    const getcount = async () => {
      try {
        const response = await axios.get(
          `https://gramgranthalay-backend-2.onrender.com/Count/Count`
        );
        console.log(response.data[0].count), setcount(response.data[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getcount();
  };

  async function handledelete(i) {
    // list.remove(i);

    const delet = await fetch(
      `https://gramgranthalay-backend-2.onrender.com/form/${i.uid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: i.uid }),
      }
    );

    if (delet) {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
              "district"
            )}`
          );
          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      var index = list.indexOf(i);
      if (index > -1) {
        list.splice(index, 1);
      }
      console.log(i);

      let templist = [...list];
      setlist(templist);
    }
  }
  const [edit, setedit] = useState("false");
  const [editvalu, seteditvalue] = useState();
  function setvalue(i) {
    setedit("true");
    setdata({
      uid: i.uid,
      lname: i.lname,
      gam: i.gam,
      pin: i.pin,
      taluko: i.taluko,
      categoryoflibrary: i.categoryoflibrary,
      sthapnadate: i.sthapnadate,
      district: i.district,
    });
    seteditvalue(i);
  }
  async function handleedit() {
    console.log("mihir");
    setloader("true");
    console.log(editvalu);

    const edit = await fetch(
      `https://gramgranthalay-backend-2.onrender.com/form/${editvalu.uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editvalu),
      }
    );
    console.log("done");

    if (edit) {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `https://gramgranthalay-backend-2.onrender.com/district/${localStorage.getItem(
              "district"
            )}`
          );
          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      setedit("false");
      setloader("false");
    }
  }

  const number = useRef();
  const checkpin = () => {
    const arr = pd.filter((elm) => elm.uid === number.current.value);
    console.log(arr);
    setloader("true");
    if (arr.length !== 0) {
      setdata(arr[arr.length - 1]);
      console.log(data);
      setloader("false");
    } else {
      setdata({
        uid: "",
        lname: "",
        gam: "",
        pin: "",
        taluko: "",
        categoryoflibrary: "",
        sthapnadate: "",
        district: "",
        registernumber: "",
        emailmen: "",
        emailmenaddres: "",
        libraryen: "",
        libraryenaddres: "",
        libraryeneducation: "",
        libraryensalary: "",
        librarystatus:"",
      });
      setloader("false");
    }

    console.log(pin);
  };

  return (
    <>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader === "false" && (
        <div>
          <NavBar titel={"ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ  "}></NavBar>
          <form onSubmit={handleSubmit} ref={pdfref} className="form ">
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-2">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયનું નામ :
                </label>
              </div>
              <div className="col-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="gname"
                  autoComplete="off"
                  name="lname"
                  value={data.lname}
                  // placeholder={pin[0].lname}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-1">
                <label className="col-form-label">ગામ :</label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="gam"
                  value={data.gam}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected value="">
                    select
                  </option>
                  <option>gam</option>
                  <option>gam-1</option>
                  <option>gam-3</option>
                  <option>gam-2</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label">જીલો :</label>
              </div>
              <div className="col">
                <select
                  required
                  name="district"
                  value={data.district}
                  onChange={handleInput}
                  ref={librarydistrict}
                  id="inputState"
                  className="form-select"
                >
                  <option selected value="">
                    Select
                  </option>

                  {districtlist.map((e, index) => (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label">તાલુકો :</label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="taluko"
                  value={data.taluko}
                  onChange={handleInput}
                  onClick={handlesettaluka}
                  className="form-select"
                >
                  <option selected value="">
                    Select
                  </option>
                  {listtaluka.map((e, index) => (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-1">
                <label className="col-form-label">પિન કોડ :</label>
              </div>
              <div className=" col">
                <input
                  required
                  type="number"
                  name="pin"
                  value={data.pin}
                  onChange={handleInput}
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col">
                <label className="col-form-label col-sm-10">
                  સ્થાપના તારીખ:
                </label>
              </div>
              <div className="col">
                <input
                  required
                  type="date"
                  name="sthapnadate"
                  value={data.sthapnadate}
                  onChange={handleInput}
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>

              <div className="col">
                <label className="col-form-label col-sm-10">કેટેગરી:</label>
              </div>
              <div className="col">
                <select
                  required
                  name="categoryoflibrary"
                  value={data.categoryoflibrary}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>Select</option>
                  <option>નગર કક્ષા-૧</option>
                  <option>નગર કક્ષા-૨</option>
                  <option>બાળ લાયબ્રેરી</option>
                  <option>મહિલા લાયબ્રેરી</option>
                  <option>ગ્રામ ગ્રંથાલય</option>
                  <option>શહેર શાખા</option>
                  <option>શહેર લાઇબ્રેરી</option>
                  <option>અંધજન લાયબ્રેરી</option>
                  <option>વિશિષ્ટ લાઇબ્રેરી</option>
                  <option>બિન અદિજાતિ</option>
                  <option>અદિજાતિ</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label ">ફોન નંબર</label>
              </div>
              <div className="col">
                <input
                  required
                  // value={}
                  name="phone"
                  value={data.phone}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-sm-2">
                <label className="col-form-label ">ઈમેલ આઈડી :</label>
              </div>
              <div className="col">
                <input
                  required
                  name="email"
                  value={data.email}
                  onChange={handleInput}
                  type="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-1">
                <label className="col-form-label">
                  પુસ્તકાલયની વર્તમાન સ્થિતિ :
                </label>
              </div>
              <div className="col">
                <select
                  required
                  name="librarystatus"
                  value={data.librarystatus}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected value="">
                    select
                  </option>
                  <option>Active</option>
                  <option>Deactivated</option>
                </select>
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

                <div className=" col">
                  <button
                    type="button"
                    onClick={downloadpdf}
                    className="btn btn-primary"
                  >
                    downloadpdf
                  </button>
                </div>

                {edit === "false" && (
                  <div className=" col">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                )}
                {edit === "true" && (
                  <div className=" col">
                    <button
                      type="submit"
                      onClick={handleedit}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </center>
            {Uidset === "true" && <h1>{Uid}</h1>}
          </form>
          {pd.length !== 0 && (
            <>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col-2">
                  <label className="col col-form-label">UID :</label>
                </div>
                <div className="col">
                  <input
                    required
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    ref={number}
                  />
                </div>
                <div className=" col-2">
                  <button
                    type="button"
                    onClick={checkpin}
                    className="btn btn-primary"
                  >
                    Search
                  </button>
                </div>
              </div>
              <table className="table-bordered table-hover datatable">
                <tr>
                  <th className="helight">name</th>
                  <th className="helight">id</th>
                  <th className="helight"></th>
                </tr>

                {pd.map((i) => (
                  <tr>
                    <th key={i.lname}> {i.lname}</th>
                    <th key={i.uid}> {i.uid}</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => setvalue(i)}
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handledelete(i)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </table>
            </>
          )}
          <div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
}
export default Addnew;
