import React from "react";

function Loader() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <div className="p-5">
            <img alt='loading....' src="./images/loader.svg" className="w-25"/>
            <h5>
              <div className="spinner-border" role="status"></div>Relax while we
              load.....
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
