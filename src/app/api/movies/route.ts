const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9197abf532mshb8afa6fbfbacb4fp1a34c8jsndd0e574b44c5",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

export async function GET(request: Request) {
  const response = await fetch(
    "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1",
    options
  );
  const data = await response.json();
  console.log("data", data);
  return new Response(data);
}
