import { string } from "prop-types";

/**
 * API AUTH TOKEN
 */
const TOKEN = import.meta.env.VITE_APP_TOKEN;
/**
 * API BASE URL
 */
const API = import.meta.env.VITE_APP_API;
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

    // console.log({ data });

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
 * @param value
 * @param index
 * @param array
 * @returns
 */
export function onlyUnique(value: string, index: number, array: Array<string>) {
  return array.indexOf(value) === index;
}
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
type ReceiveData = (args: any) => void;

/**
 * Get articles of type card
 * @param callback
 */
export const fetchArticleData = (callback: ReceiveData) => {
  ///card
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${TOKEN}`);

  fetch(
    `${API}graphql?query={%20filtered(first:120%20page:1%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`,
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then(callback)
    .catch((error) => {
      console.error("Error: ", error);

      callback(Error(`${error?.message}`));
    });
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
    `${API}graphql?query={%20filtered(first:90%20page:1%20type:%22trend%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`,
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.json())

    .then(callback)
    .catch((error) => {
      console.error("Error: ", error);

      callback(Error(`${error?.message}`));
    });
};
/**
 * Hot trends
 * @param callback
 */
export const fetchTrendsData = (callback: ReceiveData) => {
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${TOKEN}`);

  fetch(
    `${API}graphql?query={%20filtered(first:15%20page:1%20type:%22hot-trends%22){%20paginatorInfo{%20count%20currentPage%20lastPage%20total%20}%20data{%20id%20label%20url%20headline%20}%20}%20}`,
    {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then(callback)
    .catch((error) => {
      console.error("Error: ", error);

      callback(Error(`${error?.message}`));
    });
};

export const sortingFn = (a: ArticleType, b: ArticleType) => {
  if (a.thumbnail && !b.thumbnail) return -1;
  if (!a.thumbnail && b.thumbnail) return 1;

  return 0;
};

// horizontal auto scroll
export function animateScroll(duration = 2000, someElement: HTMLElement) {
  var start = someElement.scrollLeft;
  var end = someElement.scrollWidth * 2;
  var change = end - start;
  var increment = 20;
  function easeInOut(currentTime: number, start: number, change: number, duration:number) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }
  function animate(elapsedTime: number) {
    elapsedTime += increment;
    var position = easeInOut(elapsedTime, start, change, duration);
    someElement.scrollLeft = position;
    if (elapsedTime < duration) {
      setTimeout(function() {
        animate(elapsedTime);
      }, increment)
    }
  }
  animate(0);
}


export type ArticleType = {
  id: string;
  url: string;
  headline: string;
  lede: string;
  thumbnail: string;
  category: string;
  catLink: string;
  images: string;
  src_name: string;
  src_url: string;
  src_logo: string;
  vidLen: string;
  type: string;
  tag: string;
  tags: string;
  author: string;
  authors: string;
  date: string;
};
