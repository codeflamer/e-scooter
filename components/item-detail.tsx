import React, { useState } from "react";

import ItemDisplay from "./item-display";
import ItemProperties from "./item-properties";
const ItemDetail = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 justify-between">
        <ItemDisplay />
        <ItemProperties />
      </div>
    </section>
  );
};

export default ItemDetail;
