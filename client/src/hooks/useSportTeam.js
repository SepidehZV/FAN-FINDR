import { useState, useEffect } from "react";
import axios from "axios";

const useSportTeam = () => {
  const [stateSportTeam, setStateSportTeam] = useState({
    sports: [],
    teams: []
  });
  
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/sports"),
      axios.get("http://localhost:3001/api/teams")
    ])
      .then((all) => {
        setStateSportTeam((prev) => ({
          ...prev,
          sports: all[0].data,
          teams: all[1].data
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    stateSportTeam
  };
};

export default useSportTeam;
