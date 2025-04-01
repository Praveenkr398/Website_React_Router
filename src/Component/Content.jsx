import React from "react";
import { useParams } from "react-router-dom";
import './Content.css'
function Content() {
  const { searchId } = useParams();
  return (
    <div className="box">
      Search Result:
      <div className="searchId">{searchId}</div>{" "}
    </div>
  );
}

export default Content;
