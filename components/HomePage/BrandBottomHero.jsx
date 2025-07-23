import Image from "next/image";
import React from "react";

const BrandBottomHero = () => {
  return (
    <div className="brandsHeroBotoom"> 
      <div className="container">
        <Image
          src="/images/brandsHero.png"
          alt="brands"
          width={1500}
          height={130}
        />
      </div>
    </div>
  );
};

export default BrandBottomHero;
