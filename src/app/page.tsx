import { getAllAnime } from "@/actions/getAnime";
import UserList from "@/components/UserList";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function Home() {
  const initialAnimes = await getAllAnime(1, INITIAL_NUMBER_OF_USERS);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 max-w-[1000px] mx-auto gap-1 md:gap-3">
      <UserList initialAnimes={initialAnimes} />
    </div>
  );
}
