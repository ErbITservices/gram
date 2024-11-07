import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
function Report({ arr, handleback, title }) {
  const pdfref = useRef();
  const downloadpdf = useReactToPrint({
    content: () => pdfref.current,
    documentTitle: "Ahevalform",
  });
  console.log(arr);

  return (
    <center>
      <div className="main rounded">
        <h1 className="heighlight">{title}</h1>
        <table
          ref={pdfref}
          className="table table-bordered table-hover rounded"
        >
          <thead>
            <tr>
              <th>Library id</th>
              <th>Library Name</th>
              <th>District</th>
              <th>Taluko</th>
              <th>City</th>
              <th>phone</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {arr &&
              arr.map((i) => (
                <tr>
                  <td>{i.uid}</td>
                  <td>{i.lname}</td>
                  <td>{i.district}</td>
                  <td>{i.taluko}</td>
                  <td>{i.gam}</td>
                  <td>{i.phone}</td>
                  <td>{i.email}</td>
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
