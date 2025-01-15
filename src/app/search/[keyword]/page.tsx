import React,{ReactNode} from 'react'
import AnimeList from "@/app/components/AnimeList";
import HeaderAnimeList from "@/app/components/AnimeList/header";

const Page = async function ({
  params,
}: {
  params: Promise<{ keyword: string }>
})
{
  const keyword = (await params).keyword

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`, {
      cache: 'no-store', // Hindari cache jika data sering berubah
    });

    if (!response.ok) {
      throw new Error('Failed to fetch anime data');
    }

    const searchAnime = await response.json();

    return (
      <section>
        <HeaderAnimeList title={`Pencarian Untuk ${keyword}.....`} />
        <AnimeList animes={searchAnime} />
      </section>
    );
  } catch (error) {
    return (
      <section>
        <HeaderAnimeList title="Error" />
        <p>Gagal memuat data pencarian. Silakan coba lagi nanti.</p>
        <p>{`Error : ${error}`}</p>
      </section>
    );
  }
}

export default Page