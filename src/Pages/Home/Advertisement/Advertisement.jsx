import React from "react";
import AdvertisementCard from "../../../Components/AdvertisementCard";


const Advertisement = ({ ads }) => {
  
  return (
    <div className="bg-base-200">
      <h2 className="text-center text-3xl pt-20">Todays Advertised Top Laptops</h2>
      <div className="carousel w-full bg-base-200 ">
        {
          ads.map(ad=>  <AdvertisementCard key={ad._id} ad={ad}></AdvertisementCard>)
       }
      </div>
    </div>
  );
};

export default Advertisement;
