export default (thumbnailObj) => {
  const { mime, url, alternativeText, caption } = thumbnailObj.data.attributes;
  const isImage = mime.split("/")[0] == "image";
  const full_url = process.env.NEXT_PUBLIC_API_BASE + url;

  return {
    url,
    isImage,
    caption,
    full_url,
    alternativeText,
  };
};
