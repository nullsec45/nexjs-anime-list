import Link from "next/link"

interface HeaderProps{
    title?:string;
    linkHref?:string;
    linkTitle?:string;
}

const HeaderAnimeList:React.FC<HeaderProps>  = ({title,linkHref,linkTitle}) => {
  return (
    <div className="container mx-auto items-center flex justify-between items-center p-4">
        <h1 className="text-2xl text-center text-color-primary">{title}</h1>
        { linkHref && linkTitle ?
            <Link href={linkHref} className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all">
              {linkTitle}
            </Link>
            :
            null
        }
    </div>
  )
}

export default HeaderAnimeList
