/**
 *
 * @param url image URL
 * @returns
 */
export const imgData = async (url: string): Promise<Blob | null> => {
  try {
    let response: any = await fetch(url, {
      mode: "no-cors"
    });

    console.log({response});
    
    let data = await response.blob();

    console.log({data});
    

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
export const _rgbToHex = (rgb: Array<number>) => '#' + rgb.map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')