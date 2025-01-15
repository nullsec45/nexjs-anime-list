import AnimeList from "@/app/components/AnimeList";
import HeaderAnimeList from "@/app/components/AnimeList/header";

const Page=async () => {
  const response=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime=await response.json();

  return (
      <>
        <section>
          <HeaderAnimeList title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
          <AnimeList animes={topAnime} />
        </section>
      </>
  );
}

export default Page;