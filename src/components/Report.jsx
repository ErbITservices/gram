import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
function Report({ arr, handleback, title }) {
  const pdfref = useRef();
  const downloadpdf = useReactToPrint({
    content: () => pdfref.current,
    documentTitle: "Ahevalform",
  });
  console.log(arr);

  const [showlist, setshowlist] = useState({
    uid: true,
    lname: true,
    gam: true,
    librarystatus: true,
    pin: "",
    taluko: false,
    sthapnadate: "",
    district: false,
    male: "",
    female: "",
    studypeople: "",
    studymale: "",
    studyfemale: "",
    studychild: "",
    lavaj: "",
    lavajamount: "",
    workinghourslibrary: "",
    workinghoursbook: "",
    handleby: "",
    registernumber: "",
    emailmen: "",
    emailmenaddres: "",
    libraryen: "",
    libraryenaddres: "",
    libraryeneducation: "",
    libraryensalary: "",
    housestate: "",
    houserent: "",
    hosestatus: "",
    aircondition: "",
    openforevryone: "",
    lastyearbookcount: "",
    currentyearbookcount: "",
    lastyearaddedbook: "",
    endyearabookcount: "",
    publishbook: "",
    newspapercount: "",
    newpaper: "",
    parigrahan: "",
    register: "",
    deadregister: "",
    attendencregister: "",
    anualrequest: "",
    recieptbook: "",
    voucherbook: "",
    rojmel: "",
    commandbook: "",
    publishregister: "",
    followinstructoin: "",
    whichlevel: "",
    requirment: "",
    grant: "",
    vanchansamagrik: "",
    vanchansamagrim: "",
    pagark: "",
    pagarm: "",
    note1: "",
    note2: "",
    note3: "",
    furnichark: "",
    furnicharm: "",
    otherm: "",
    otherk: "",
    alavajam: "",
    aintrest: "",
    arent: "",
    awest: "",
    agrant: "",
    ahelp: "",
    adistrict: "",
    ataluko: "",
    agam: "",
    aotherhelp: "",
    aother: "",
    aprevios: "",
    kbook: "",
    knewspaper: "",
    kbookbinding: "",
    kinfletion: "",
    ksalary: "",
    kother: "",
    kfurnichar: "",
    kfurnicharrepair: "",
    kotherbuy: "",
    krent: "",
    krepair: "",
    ktax: "",
    kstationary: "",
    kmail: "",
    ktrip: "",
    kpremium: "",
    klightbill: "",
    kothersmall: "",
    Currentyear: "",
    phone: "",
    email: "",
  });
  function handleshow(e) {
    const name = e.target.name;
    const value = e.target.checked;
    setshowlist({ ...showlist, [name]: value })
    console.log(showlist);
    console.log(value);
    
  }
  return (
    <center>
      <div className=" rounded">
        {/* <h1 className="heighlight">{title}</h1> */}
        <div className="checklistcontainer">
          <div className="checklist">
            <label className="form-check-label">UID</label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="uid"
              value={showlist.uid}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Library Name</label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="lname"
              value={showlist.lname}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">City </label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="gam"
              value={showlist.gam}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Library Status </label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="librarystatus"
              value={showlist.librarystatus}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Phone </label>
            <input
              required
              className="form-check-input"
              type="checkbox"
              name="phone"
              value={showlist.phone}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Email </label>
            <input
              required
              className="form-check-input"
              type="checkbox"
              name="email"
              value={showlist.email}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Year </label>
            <input
              required
              className="form-check-input"
              type="checkbox"
              name="Currentyear"
              value={showlist.Currentyear}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">District </label>
            <input
              required
              className="form-check-input"
              type="checkbox"
              name="district"
              value={showlist.district}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">Taluko </label>
            <input
              required
              className="form-check-input"
              type="checkbox"
              name="taluko"
              value={showlist.taluko}
              onChange={handleshow}
            />
          </div>
          {/* <div className="checklist">
            <label className="form-check-label">City </label>
            <input
              required
              
              className="form-check-input"
              type="checkbox"
              name="gam"
              value={showlist.gam}
              onChange={handleshow}
            />
          </div> */}
          {/* <div className="checklist">
            <label className="form-check-label">City </label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="gam"
              value={showlist.gam}
              onChange={handleshow}
            />
          </div>
          <div className="checklist">
            <label className="form-check-label">City </label>
            <input
              required
              defaultChecked
              className="form-check-input"
              type="checkbox"
              name="gam"
              value={showlist.gam}
              onChange={handleshow}
            />
          </div> */}
        </div>

        <table
          ref={pdfref}
          className="table table-bordered table-hover rounded reporttable"
        >
          <thead>
            <tr>
              {showlist.Currentyear && <th>Year</th>}
              {showlist.uid && <th>Library id</th>}
              {showlist.librarystatus && <th>Library Status</th>}
              {showlist.lname && <th>Library Name</th>}
              {showlist.district && <th>District</th>}
              {showlist.taluko && <th>Taluko</th>}
              {showlist.gam && <th>City</th>}
              {showlist.phone && <th>Phone</th>}
              {showlist.email && <th>Email</th>}
            </tr>
          </thead>
          <tbody>
            {arr &&
              arr.map((i) => (
                <tr>
                  {showlist.Currentyear && <td>{i.Currentyear}</td>}
                  {showlist.uid && <td>{i.uid}</td>}
                  {showlist.librarystatus && <td>{i.librarystatus}</td>}
                  {showlist.lname && <td>{i.lname}</td>}
                  {showlist.district && <td>{i.district}</td>}
                  {showlist.taluko && <td>{i.taluko}</td>}
                  {showlist.gam && <td>{i.gam}</td>}
                  {showlist.phone && <td>{i.phone}</td>}
                  {showlist.email && <td>{i.email}</td>}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={downloadpdf} className="btn btn-primary">
        Donwload PDF
      </button>

      <button onClick={handleback} class="btn btn-warning m-3 " type="button">
        Back
      </button>
    </center>
  );
}
export default Report;
