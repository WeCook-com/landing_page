import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [IsElementDesplay, setIsElementDesplay] = useState(true); 
  useEffect(() => {

   const timer= setTimeout(() => {
     setIsElementDesplay(false)
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, []);

  return (
    <>
      <div className={`${!IsElementDesplay ? 'hidden' : ''}`} id="preloader">
        <div id="status">
          <div className="logo">
            <Image
              src={"/images/logo-icon-64.png"}
              className="d-block mx-auto animate-[spin_10s_linear_infinite]"
              alt=""
              width={50}
              height={50} // optional
            />
          </div>
          <div className="justify-content-center">
            <div className="text-center">
              <h4 className="mb-0 mt-2 text-lg font-semibold">Upwind</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
