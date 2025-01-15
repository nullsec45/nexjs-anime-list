import Image from "next/image"
import Link from "next/link";


interface AnimeListProps {
  animes: {
    pagination: {
      last_visible_page: number;
      has_next_page: boolean;
      current_page: number;
      items?: {
        count: number;
        total: number;
        per_page: number;
      };
    };
    data: AnimeData[];
  };
}

interface AnimeData {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  [key: string]: any; // Opsional jika ada properti tambahan
}

const AnimeList:React.FC<AnimeListProps> = ({animes}) => {
  return (
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {
            animes.data.map((anime:AnimeData) => {
              return (
               <Link href={`/${anime.mal_id}`} className="cursor-pointer hover:text-color-accent text-color-primary transitioa-all" key={anime.mal_id}>
                   <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full"/>
                   <h3 className="font-bold md:text-xl text-md p-4 text-color-primary hover:text-color-accent">{anime.title}</h3>
                 </Link>
              )
            })
          }
        </div>

  )
}

export default AnimeList