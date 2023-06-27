
import SideBar from "../../SideBar";
import Banner from "../../Banner";
import TopSection from "./TopSection";
import GetSchools from "./GetSchools";
import GetSearchedSchools from "./GetSearchedSchools";
import { searchStore } from "../../../../stores/index";

export const Schools = () => {
  const search = searchStore((state) => state.search);
  return (
    <>
    <div className=" grid grid-cols-12">

    <div className="md:col-span-2 hidden md:block h-screen overflow-y-hidden ">
    <SideBar />
    </div>
    <div className="md:col-span-10 col-span-12 h-screen overflow-y-scroll w-full overflow-x-hidden">
          <Banner />
     
          <div className="mx-auto  px-4 sm:px-6 lg:px-8 xl:grid  xl:grid-cols-3">
            <div className="xl:col-span-5  ">
           
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pt-3 text-center">
                   <TopSection />
                      <div className=" grid grid-cols-10">
                      
                    {search&&<GetSearchedSchools/>||<GetSchools/>}
                      </div>
                    </div>
                  </div>
                </div>
           
            </div>
          </div>
        
      </div>
    </div>
    </>
  );
};
