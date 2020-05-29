import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Browse() {
  const [strains, setStrains] = useState(null);
  const params = useParams();

  const getStrains = () => {
    axios.get("https://med-cabinet1.herokuapp.com/api/strains").then((res) => {
      console.log(res.data);
      setStrains(res.data);
    });
  };
  useEffect(() => {
    getStrains();
  }, []);

  const deleteStrain = (e) => {
    console.log(e.target.id);
    axios
      .delete(`https://med-cabinet1.herokuapp.com/api/strains/${e.target.id}`)
      .then((res) => {
        console.log(res);
        getStrains();
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1 style={{ width: "100%" }}>BROWSE ALL</h1>
      {!strains ? (
        <p>fetching strains...</p>
      ) : (
        strains.map((strain) => {
          return (
            <div style={{ width: "25%" }}>
              <label>
                <p
                  id={strain.id}
                  onClick={(e) => {
                    deleteStrain(e);
                  }}
                >
                  🗑
                </p>
                <span style={{ fontWeight: "bold" }}>Strain Name:</span>
                <p>{strain.name}</p>
              </label>
            </div>
          );
        })
      )}
    </div>
  );
}
