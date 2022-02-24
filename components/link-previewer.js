import React from "react";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../public/placeholder.png";

export function Tooltip(props) {
  return (
    <div className="relative flex flex-col items-center group">
      <div>
        <h2>{photo?.title} + props</h2>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
