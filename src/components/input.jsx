import NavBar from "./NavBar";
function Input(props) {
  return (
    <div className="main">
      {/* <NavBar></NavBar> */}
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className=" col">
          <select
            required
            onChange={(event) => props.handleclick(event)}
            className="form-select"
            aria-label="Default select example"
          >
            <option>Select Category</option>
            {props.category.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className=" col">
          <select
            required
            className="form-select"
            aria-label="Default select example"
            onChange={async (event) => props.handleclick(event)}
          >
            <option selected>Select library</option>
            {props.library.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className=" col">
          <select
            required
            className="form-select"
            aria-label="Default select example"
            onChange={async (event) => props.showdata(event)}
          >
            <option selected>Select library</option>
            {props.city.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default Input;
