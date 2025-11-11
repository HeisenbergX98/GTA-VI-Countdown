import MarinaBG from "../assets/backgrounds/marina.webp";
import BridgeViewBG from "../assets/backgrounds/bridge-view.webp";
import OceanViewBG from "../assets/backgrounds/ocean-view.webp";
import StreetArtBG from "../assets/backgrounds/street-art.webp";
import StripClubEntranceBG from "../assets/backgrounds/strip-club-entrance.webp";
import StripClubCBG from "../assets/backgrounds/strip-club.webp";
import ViceCityBG from "../assets/backgrounds/vice-city.webp";

interface backgroundProps {
  id: number;
  name: string;
  background_img?: string;
}

export const backgrounds: backgroundProps[] = [
  { id: 1, name: "Marina", background_img: MarinaBG },
  { id: 2, name: "Beach", background_img: ViceCityBG },
  { id: 3, name: "Bridge View", background_img: BridgeViewBG },
  { id: 4, name: "Ocean View", background_img: OceanViewBG },
  { id: 5, name: "Street Art", background_img: StreetArtBG },
  { id: 6, name: "Strip Club", background_img: StripClubCBG },
  { id: 7, name: "Club", background_img: StripClubEntranceBG },
  { id: 8, name: "Official", background_img: "" },
  
];
