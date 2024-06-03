import Redirect from "@/components/redirect";
import getRootUrl from "@/lib/getRootUrl";

export default async function Page({ params }: { params: { url: string[] } }) {
  let url = params.url.join("/");

  url = url.replace("https%3A", "https:/");

  const fetchedURL = await getRootUrl(url);

  console.log(fetchedURL);

  return (
    
      <Redirect redirectLink={fetchedURL} />
    
  );
}
