import React from "react";
import BucketListInput from "./inputItem";
import BucketListPeriod from "./period";

function BucketList() {
  return (
    <>
      <BucketListInput />
      <table>
        <BucketListPeriod />
      </table>
    </>
  );
}

export default BucketList;
