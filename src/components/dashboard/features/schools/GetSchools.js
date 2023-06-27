import { SchoolsCard } from "./SchoolsCard";
import { useGetAllSchoolsQuery } from "./schoolsApiSlice";

function GetSchools() {
  const { data, isLoading, isSuccess, isFetching, refetch, isError, error } =
    useGetAllSchoolsQuery();
  console.log(data);
  return (
    <div className="col-span-10">
      <div className="grid  gap-3  md:grid-cols-3 grid-cols-1">
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map((school) => <SchoolsCard institution={school} />)}
        {isLoading && <div className="">Loading</div>}
      </div>
    </div>
  );
}

export default GetSchools;
