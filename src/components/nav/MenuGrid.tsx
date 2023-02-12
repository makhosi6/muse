import { useEffect, useRef, useState } from "react";
import { imgData, _rgbToHex, hashCode } from "../util/helpers";
import logoSrc from "../../assets/images/ewn-logo.png";
//@ts-ignore
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief.mjs"

const ENV = import.meta.env.MODE;
type Props = {};

export const MenuGrid = (props: Props) => {
  return (
    <div className="muse-grid-layout">
      {arr.map((i) => (
        <MenuGridItem url="/page-two" src={i} uid={hashCode(i)} key={hashCode(i)} />
      ))}
    </div>
  );
};



let arr = [
  "https://ewn.co.za/site/design/img/ewn-logo.png",
  "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
  "https://www.enca.com/sites/default/files/styles/news_listing/public/afp/2023-01/doc-33846AQ-%40photo0.jpg?itok=SU9aRRra",
  "https://www.conviva.com/wp-content/uploads/2019/12/Bloomberg-logo-.png",
];

type ItemProps = {
  src: string;
  uid: string;
  url: string;
};

type ColorObj = {
  hex: string;
};

export default function MenuGridItem(props: ItemProps) {

  const img = useRef(null);

  return (
    <a href={props.url} className={"image-cont-" + props.uid}>
      <img
        ref={img}
        src={props.src}
        alt="img"
        width="100"
        height="50"
        crossOrigin="anonymous"
      />
    </a>
  );
}
