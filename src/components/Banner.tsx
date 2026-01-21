import { useState } from "react";
import { Button } from "./ui/button";
import PostBlogPopUp from "./PostBlogPopUp";

const Banner = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="pt-12 px-1.5">
      <h1 className="text-center font-bold text-5xl">CA Monk Blog</h1>
      <p className="text-center pt-5 text-gray-600 text-xl">
        Stay updated with the latest trends in finance, accounting, and career growth
      </p>
      <div className="text-center mt-6">
        <Button onClick={() => setShowPopUp(true)}>Create Blog</Button>
      </div>
      {showPopUp && <PostBlogPopUp onClose={()=>setShowPopUp(false)}/>}
    </div>
  );
};

export default Banner;
