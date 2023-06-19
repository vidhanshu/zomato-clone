import Footer from "@/src/home/components/Footer"
import ExploreOptions from "@/src/home/components/ExploreOptions"
import Navbar from "@/src/nagpur/components/Navbar";

export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar/>
            {children}
            <ExploreOptions />
            <Footer />
        </>
    );
}


