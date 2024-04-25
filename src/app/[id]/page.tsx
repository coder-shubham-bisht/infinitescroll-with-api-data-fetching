import { getAnimeById } from "@/actions/getUsers";
import AnimeCard from "@/components/AnimeCard";

const AnimePage = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const anime = await getAnimeById(params.id);
  return (
    <div>
      <AnimeCard anime={anime} />
    </div>
  );
};
export default AnimePage;
