import { NSComponents } from "@/src/common/components/Components";
import { NSHome } from "../home";

export const COLLECTIONS: NSHome.ICollection[] = [
  {
    id: "1",
    placesCount: 14,
    title: "On the Outskirts",
    image: "/home/on_the_outskirts.png",
  },
  {
    id: "2",
    placesCount: 9,
    title: "Must visit restaurants",
    image: "/home/must_visit.png",
  },
  {
    id: "3",
    placesCount: 8,
    title: "Insta-worthy",
    image: "/home/insta_worthy.png",
  },
  {
    id: "4",
    placesCount: 15,
    title: "Value for money",
    image: "/home/value_for_money.png",
  },
];

export const OPTIONS: NSHome.IOption[] = [
  {
    id: "1",
    title: "Order Online",
    desc: "Order your favourite food from your favourite restaurant",
    image: "/home/order_online.png",
    link: "/nagpur/delivery",
  },
  {
    id: "2",
    title: "Dining",
    desc: "Order your favourite food from your favourite restaurant",
    image: "/home/dining.png",
    link: "/nagpur/dining",
  },
  {
    id: "3",
    title: "Nightlife & Clubs",
    desc: "Order your favourite food from your favourite restaurant",
    image: "/home/night_and_clubs.png",
    link: "/nagpur/nightful",
  },
];

export const POPULAR: NSHome.IPopular[] = [
  {
    id: "1",
    name: "The Big Chill Cakery",
    placeCount: 34,
  },
  {
    id: "2",
    name: "Bohemia",
    placeCount: 34,
  },
  {
    id: "3",
    name: "The Big Chill Cakery",
    placeCount: 34,
  },
  {
    id: "4",
    name: "Bohemia",
    placeCount: 34,
  },
  {
    id: "5",
    name: "The Big Chill Cakery",
    placeCount: 34,
  },
];

export const PROFILE_MENU: NSComponents.IMenuItem[] = [
  {
    label: "Profile",
    link: "/nagpur",
  },
  {
    label: "Notifications",
    link: "/",
  },
  {
    label: "Bookmarks",
    link: "/",
  },
  {
    label: "Reviews",
    link: "/",
  },
  {
    label: "Network",
    link: "/",
  },
  {
    label: "Find Friends",
    link: "/",
  },
  {
    label: "Logout",
    onClick: () => {},
  },
];
