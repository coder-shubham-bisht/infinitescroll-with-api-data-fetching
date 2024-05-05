import { getAllAnime } from "@/actions/getAnime";
import UserList from "@/components/UserList";

const INITIAL_SIZE_OF_ANIME_LIST = 9;
const INITIAL_PAGE_NO = 1;
export default async function Home() {
  const initialAnimes = await getAllAnime(
    INITIAL_PAGE_NO,
    INITIAL_SIZE_OF_ANIME_LIST
  );

  return (
    <main>
      <h1 className="text-center font-bold text-2xl mb-4 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient bg-[300%]">
        Infinite Scoll with Server Action
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 max-w-[1000px] mx-auto gap-2 md:gap-3">
        <UserList initialAnimes={initialAnimes} />
      </div>
    </main>
  );
}
