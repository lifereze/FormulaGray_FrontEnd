import React, { useState, useEffect } from "react";
import { SchoolsCard } from "./SchoolsCard";
import {
  getAllSchools,
  searchSchools,
} from "../../../data/api/authenticatedRequests";
import { searchStore } from "../../../stores/index";
function GetSchools() {
  const [schools, setSchools] = useState();
  const [loading, setLoading] = useState(false);
  const search = searchStore((state) => state.search);
  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      if (search) {
        const res = await searchSchools({ query: search });
        setSchools(res.data);
      } else {
        const res = await getAllSchools();
        setSchools(res.data);
      }

      setLoading(false);
      console.log(schools);
    };
    fetchSchools();
  }, [search]);
  return (
    <div className="col-span-10">
      <div className="grid  gap-3  grid-cols-3">
        {!loading &&
          schools &&
          schools.length > 0 &&
          schools.map((school) => <SchoolsCard institution={school} />)}
      </div>
    </div>
  );
}

export default GetSchools;
