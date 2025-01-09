import Image from "next/image"


interface AnimeListProps {
  title: string;
  image: string;
}

const AnimeList:React.FC<AnimeListProps> = ({title,image}) => {
  return (
    <div className="">
        <Image src={image} alt="..." width={350} height={350}/>
        <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
      </div>
  )
}

export default AnimeList