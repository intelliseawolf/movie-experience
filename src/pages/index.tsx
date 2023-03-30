import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

import type { Movie } from "@/types";
// import handler from "@/app/api/data";

export default function Home() {
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch("/api/movies", {
        method: "GET",
      });
      console.log("response", response);
    };

    fetchMovie();
  }, []);

  return <Button colorScheme="blue">Button</Button>;
}
