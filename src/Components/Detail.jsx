import { About_me } from "../constants";
import pic from "../assets/assets/Profile.png";
const Detail = () => {
  return (
    <div className="border-b pb-4 lg:mb-35 border-neutral-900">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-4xl">Janitha Malshan</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">NSBM Undergraduate</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{About_me}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-center">
            <img src={pic} alt="Profile" width="400px" height="400px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
