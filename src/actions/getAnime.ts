"use server";
// import { UserAPIResponse } from "@/types/User";
import { z } from "zod";
const animeSchema = z.object({
  _id: z.string(),
  title: z.string(),
  image: z.string().url(),
  synopsis: z.string(),
  genres: z.string().array(),
  episodes: z.number(),
});
const arrayOfAnimeSchema = z.array(animeSchema);
export type typeOfAnimeSchema = z.infer<typeof animeSchema>;

export const getAllAnime = async (page: number, size: number) => {
  try {
    const url = `https://anime-db.p.rapidapi.com/anime?page=${page}&size=${size}&sortBy=ranking&sortOrder=asc`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f710e243d5msh2e7d614104bb9cap105f84jsn27187c776a3c",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const validatedData = arrayOfAnimeSchema.safeParse(data.data);
    if (validatedData.success) {
      return validatedData.data;
    } else {
      throw validatedData.error;
    }
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};

export const getAnimeById = async (id: string) => {
  try {
    const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f710e243d5msh2e7d614104bb9cap105f84jsn27187c776a3c",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    const validatedData = animeSchema.safeParse(data);

    if (validatedData.success) {
      return validatedData.data;
    } else {
      throw validatedData.error;
    }
  } catch (error) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
