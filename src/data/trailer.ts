import Trailer1img from "../assets/t1.png";
import Trailer2img from "../assets/t2.png";

interface trailerProps {
  id: number;
  img: string;
  name: string;
  release_date: string;
  link: string;
}

export const trailerData: trailerProps[] = [
  {
    id: 1,
    img: Trailer1img,
    name: "Grand Theft Auto VI Trailer 1",
    release_date: "December 4, 2023",
    link: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  },
  {
    id: 2,
    img: Trailer2img,
    name: "Grand Theft Auto VI Trailer 2",
    release_date: "May 6, 2025",
    link: "https://www.youtube.com/watch?v=VQRLujxTm3c",
  },
];
