import { SchoolsCard } from "./SchoolsCard";
import { useGetSearchedSchoolsQuery } from "./schoolsApiSlice";
import { searchStore } from "../../../../stores/index";
function GetSearchedSchools() {
  const search = searchStore((state) => state.search);
  const { data, isLoading, isSuccess, isFetching, refetch, isError, error } =
    useGetSearchedSchoolsQuery({ query: search });
  return (
    <div className="col-span-10">
      <div className="grid  gap-3  md:grid-cols-3 grid-cols-1">
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map((school) => <SchoolsCard institution={school} />)}
      </div>
      {isLoading && <div className="">Loading</div>}
    </div>
  );
}

export default GetSearchedSchools;
