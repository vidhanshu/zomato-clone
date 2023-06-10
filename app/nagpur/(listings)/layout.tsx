import Tabs from "@/src/nagpur/components/Tabs";
import Filters from "@/src/nagpur/components/filter/Filters";

export const metadata = {
  title: "Delivery Restaurants in Nagpur - Zomato",
  description:
    "Delivery Restaurants in Nagpur. View Menus, Pictures, Ratings and Reviews for Best Delivery Restaurants in Nagpur - Nagpur Restaurants for Delivery Restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sticky top-0 bg-white z-20">
        <Tabs />
        <Filters />
      </div>
      {children}
    </>
  );
}
