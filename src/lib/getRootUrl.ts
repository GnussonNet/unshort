// Fetch api
const getRootUrl = async (url: string) => {
  const res = await fetch(`https://unshorten.but.rest/${url}`);
  const data = await res.json();
  return data.resolved_url;
};

export default getRootUrl;
