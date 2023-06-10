import Header from '@/src/nagpur/components/detail-page/Header';
import RatingLabel from "@/src/common/components/RatingLabel";
import Container from "@/src/common/components/Container";
import Tabs from "@/src/nagpur/components/detail-page/Tabs"
import { FC } from 'react';

const layout: FC<{ children: React.ReactNode, params: { slug: string } }> = ({ children, params }) => {
    return (
        <div className="relative">
            <Header />
            <Container className="pt-4 sticky top-0 z-10 bg-white pb-0">
                <div className="my-5">
                    <div className='mb-2 flex justify-between items-center'>
                        <h1 className="font-medium text-3xl">Pablo - The Art Cafe Lounge</h1>
                        <RatingLabel rating={4.5} />
                    </div>
                    <p className="text-gray-500">Continental, Italian, North Indian, American, Bar Food</p>
                    <p className="text-gray-500 font-light">Civil Lines, Nagpur</p>
                    <p className="text-gray-500 font-light"><span className='text-green-700 font-medium'>Open</span> . Mon-Sun, 12:30pm - 01:30am</p>
                </div>
                <Tabs slug={params.slug} />
            </Container>
            {children}
        </div>
    )
}

export default layout