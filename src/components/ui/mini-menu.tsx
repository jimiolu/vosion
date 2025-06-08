import Image from "next/image";
import React from "react";

const Minimenu = ({ className }: { className?: string}) => {
  return (
    <nav>
      <select
        name="EN"
        defaultValue="EN"
       className={className}
      >
        <option value="EN">EN</option>
        <option value="FR">FR</option>
      </select>
    </nav>
  );
};

export default Minimenu;
