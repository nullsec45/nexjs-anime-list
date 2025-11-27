"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";

import { getAnimeResponse } from "@/libs/api-lib";
import { AnimeListProps } from "@/components/AnimeList";

const Page = () => {
  const [page, setPage] = useState<number>(1);

  const [topAnime, setTopAnime] = useState<AnimeListProps["animes"] | null>(null);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse(
      "top/anime",
      `page=${page}&limit=8`
    );

    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu title="Anime Populer" />

      {topAnime && <AnimeList animes={topAnime} />}
      <Pagination page={page} lastPage={topAnime?.pagination.last_visible_page ?? 1}
        setPage={setPage} />
    </div>
  );
};

export default Page;
