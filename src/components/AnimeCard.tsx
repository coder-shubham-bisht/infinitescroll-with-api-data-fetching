import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { typeOfAnimeSchema } from "@/actions/getUsers";
import Link from "next/link";

export default function AnimeCard({ anime }: { anime: typeOfAnimeSchema }) {
  const { episodes, genres, image, synopsis, title, _id } = anime;
  return (
    <div className="p-2 shadow-2xl gap-y-2 flex flex-col">
      {/* anime poster */}
      <Link href={`/${_id}`}>
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
      <p>
        <span className="capitalize font-bold">generes:</span>

        {genres.map((genre) => (
          <span className="text-sm">{genre + ","}</span>
        ))}
      </p>
    </div>
  );
}
