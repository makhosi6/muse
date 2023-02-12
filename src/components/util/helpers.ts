import { string } from "prop-types";

/**
 * API TOKEN
 */
const TOKEN = import.meta.env.VITE_APP_TOKEN;
/**
 *
 * @param url image URL
 * @returns
 */
export const imgData = async (url: string): Promise<Blob | null> => {
  try {
    let response: any = await fetch(url, {
      mode: "no-cors",
    });

    console.log({ response });

    let data = await response.blob();

    console.log({ data });

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};
/**
 *
 * @param url image url
 * @param callback
 */
export const imgDataAsync = (url: string, callback: Function) => {
  fetch(url)
    .then((response) => response.blob())
    // .then(result => result.arrayBuffer())
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .catch((error) => {
      console.log("error", error);
      callback(null);
    });
};

/**
 *
 * @param rgb
 * @returns
 */
export const _rgbToHex = (rgb: Array<number>) =>
  "#" +
  rgb
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

/**
 *
 * @param str string
 * @returns
 */
export function hashCode(str: string) {
  return Array.from(str)
    .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
    .toString();
}
type ReceiveData = (args: string) => void;

/**
 * Get articles of type card
 * @param callback
 */
export const fetchArticleData = (callback: ReceiveData) => {
  ///card
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${TOKEN}`);

  fetch(
    "https://museapi.byteestudio.com/api/graphql?query={%20filtered(first:90%20page:1%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}",
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.text())
    .then(callback)
    .catch((error) => console.error("Error: ", error));
};
/**
 * Filter by topic
 * @param callback
 */
export const fetchArticleFilteredData = (callback: Function) => {
  /// filter by topic
  throw new Error("Unimplemented");
};
/**
 * Latest
 * @param callback
 */
export const fetchLatestData = (callback: ReceiveData) => {
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${TOKEN}`);

  fetch(
    "https://museapi.byteestudio.com/api/graphql?query={%20filtered(first:90%20page:1%20type:%22trend%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}",
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.text())
    .then(callback)
    .catch((error) => console.log("error", error));
};
/**
 * Hot trends
 * @param callback
 */
export const fetchTrendsData = (callback: ReceiveData) => {
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${TOKEN}`);

  fetch(
    "https://museapi.byteestudio.com/api/graphql?query={%20filtered(first:15%20page:1%20type:%22hot-trends%22){%20paginatorInfo{%20count%20currentPage%20lastPage%20total%20}%20data{%20id%20label%20url%20headline%20}%20}%20}",
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.text())
    .then(callback)
    .catch((error) => console.log("error", error));
};
