import React from 'react'
import AnimeList from "@/app/components/AnimeList";
import HeaderAnimeList from "@/app/components/AnimeList/header";

interface Params{
  keyword:string
}

const Page : React.FC<{params:Params}> = async ({params}) => {
  const {keyword} = await params
  const response=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime=await response.json();



  return (
    <>
      <section>
        <HeaderAnimeList title={`Pencarian Untuk ${keyword}.....`} />
        <AnimeList animes={searchAnime} />
      </section>
    </>
  )
}

export default Page