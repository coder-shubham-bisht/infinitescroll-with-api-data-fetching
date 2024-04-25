import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { typeOfAnimeSchema } from "@/actions/getAnime";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AnimeCard({
  anime,
  className,
}: {
  anime: typeOfAnimeSchema;
  className?: string;
}) {
  const { episodes, genres, image, synopsis, title, _id } = anime;
  return (
    <div className={cn("p-2 shadow-2xl gap-y-2 flex flex-col", className)}>
      {/* anime poster */}
      <Link href={`/${_id}`} className="flex justify-center items-center">
        <div className="max-w-[300px] w-[300px] ">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt="Image"
              className="rounded-md object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </Link>
      {/* title */}
      <p>
        <span className="capitalize font-bold">title:</span>

        <span>{title}</span>
      </p>
      {/* description */}
      <p>
        <span className="capitalize font-bold">description:</span>

        <span className="line-clamp-3">{synopsis}</span>
        <Link href={`/${_id}`} className="text-blue-500 hover:text-blue-700">
          see more
        </Link>
      </p>
      {/* episodes */}
      <p>
        <span className="capitalize font-bold">episodes:</span>
        <span>{episodes}</span>
      </p>
      {/* genere */}
      <p className="flex items-center flex-wrap">
        <span className="capitalize font-bold">generes:</span>

        {genres.map((genre) => (
          <span className="text-sm" key={genre}>
            {genre + ","}
          </span>
        ))}
      </p>
    </div>
  );
}
