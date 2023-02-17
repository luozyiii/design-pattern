/**
 * 加载图片
 * @param src
 * @returns
 */
function loadImg(src: string) {
  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject('图片加载失败');
    };
    img.src = src;
  });
  return promise;
}

const src = 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF';
const res = loadImg(src);

res
  .then((img: HTMLImageElement) => {
    console.log('width: ', img.width);
    return img;
  })
  .then((img) => {
    console.log('height: ', img.height);
    return img;
  })
  .catch((err) => {
    console.error(err);
  });

export {};
