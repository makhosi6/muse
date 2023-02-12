import { useEffect, useRef, useState } from "react";
import { imgData, _rgbToHex } from "../util/helpers";
import logoSrc from "../../assets/images/ewn-logo.png";
//@ts-ignore
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief.mjs"

const ENV = import.meta.env.MODE;
type Props = {};

export const MenuGrid = (props: Props) => {
  return (
    <div className="muse-grid-layout">
      {arr.map((i) => (
        <MenuGridItem src={i} uid={hashCode(i)} key={hashCode(i)} />
      ))}
    </div>
  );
};

function hashCode(str: string) {
  return Array.from(str)
    .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
    .toString();
}

let arr = [
  // "https://ewn.co.za/site/design/img/ewn-logo.png",
  // "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
  // "https://www.enca.com/sites/default/files/styles/news_listing/public/afp/2023-01/doc-33846AQ-%40photo0.jpg?itok=SU9aRRra",
  "https://www.conviva.com/wp-content/uploads/2019/12/Bloomberg-logo-.png",
];

type ItemProps = {
  src: string;
  uid: string;
};

type ColorObj = {
  hex: string;
};

export default function MenuGridItem(props: ItemProps) {
  let initialColor: ColorObj = {
    hex: "transparent",
  };

  const img = useRef(null);

  const [color, setColor] = useState(initialColor);

  const [url, setUrl] = useState("");

  useEffect(() => {
    // (async () => {
    // let imgSrc = await imgData(props.src);

    // if (url === "" || url === props.src || !url)
    //   setUrl(imgSrc ? URL.createObjectURL(imgSrc) : props.src);

    //@ts-expect-error
    const colorThief = new ColorThief();
    const container: any = img.current;

    console.log(container);

    const colour = colorThief.getColor(container);
    // const color = fac.getColor(container, {
    //   // mode: "precision",
    //   // silent: ENV !== "development",
    //   width: container.width || container.naturalWidth,
    //   height: container.height || container.naturalHeight,
    // });

    console.log({ COLOR: colour });

    setColor({ hex: _rgbToHex(colour) });
    console.log({ hex: _rgbToHex(colour) });
    // })();
  }, []);

  return (() => {
    console.log({ color });

    console.log("RENDER", url);

    return (
      <div
        style={{
          backgroundColor: color.hex === "#000000" ? "#d3d3d3" : color.hex,
        }}
        className={"image-cont-" + props.uid}
      >
        <img
          ref={img}
          src={props.src}
          alt="img"
          width="100"
          height="50"
          crossOrigin="anonymous"
        />
      </div>
    );
  })();
}
