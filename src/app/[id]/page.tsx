import { getAnimeById } from "@/actions/getAnime";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const anime = await getAnimeById(params.id);
  return {
    title: anime.title,
    description: anime.synopsis,
  };
}

const AnimePage = async ({ params }: Props) => {
  const anime = await getAnimeById(params.id);
  const { _id, episodes, genres, image, synopsis, title } = anime;
  return (
    <div className="max-w-[600px] mx-auto shadow-lg  p-1 flex gap-y-2 flex-col">
      <div className="w-full relative h-[300px]">
        <Image
          src={image}
          alt={title + " Image"}
          fill
          className="rounded-md object-contain"
        />
      </div>
      {/* title */}
      <p>
        <span className="capitalize font-bold">title:</span>

        <span>{title}</span>
      </p>
      {/* description */}
      <p>
        <span className="capitalize font-bold">description:</span>

        <span>{synopsis}</span>
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
};
export default AnimePage;
