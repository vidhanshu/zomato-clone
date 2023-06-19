import { PHOTOS } from "@/src/nagpur/utils/constants";
import Image from "next/image";
import Container from "@/src/common/components/Container"

const Page = () => {
    return (
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                PHOTOS.map((e, _) => (
                    <div className="overflow-hidden relative h-60 rounded-lg">
                        <Image className="object-cover" src={e} alt="" fill/>
                    </div>
                ))
            }
        </Container>
    )
}

export default Page;