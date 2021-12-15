import React, { useState } from "react";

function BucketListItem() {
  return (
    <>
      <th>무기한</th>
      <tr>
        <td className="table-primary">
          <input className="checkbox" type="checkbox" />
        </td>
        <td className="table-primary">운동하기</td>
        <td className="table-primary">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
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
        </td>
        <td className="table-primary">
          <button type="button" className="btn btn-danger">
            삭제
          </button>
        </td>
      </tr>
      <th>10년</th>
      <tr></tr>
      <th>1년</th>
      <tr></tr>
    </>
  );
}

export default BucketListItem;
