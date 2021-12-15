import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function BucketListInput() {
  return (
    <div className="input-group">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-success dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          기한
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            무기한
          </a>
          <a className="dropdown-item" href="#">
            10년
          </a>
          <a className="dropdown-item" href="#">
            1년
          </a>
        </div>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="버켓리스트를 입력하세요."
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          추가하기
        </button>
        <button className="btn btn-outline-secondary" type="button">
          리셋
        </button>
      </div>
    </div>
  );
}

export default BucketListInput;
