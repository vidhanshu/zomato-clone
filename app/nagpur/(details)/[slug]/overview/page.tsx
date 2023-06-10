import React from 'react'
import Container from '@/src/common/components/Container'
import Map from '@/src/nagpur/components/detail-page/menu/Map'

const page = ({ params }: any) => {
    return (
        <Container className="py-0 flex flex-col-reverse md:flex-row gap-10 md:gap-4">
            <div className="flex-grow flex flex-col gap-6">
                <div>
                    <h1 className="text-xl font-medium">Popular Dishes</h1>
                    <p className='text-lg text-gray-500'>Teriyaki Chicken, Ravioli, Cocktail, Spring Roll, Drinks, Dessert</p>
                </div>

                <div>
                    <h1 className="text-xl font-medium">People Say This Place Is Known For</h1>
                    <p className='text-lg text-gray-500'>Fancy Place, Art, Themed Decor, Dj, Theme, Courteous Staff</p>
                </div>

                <div>
                    <h1 className="text-xl font-medium">Average Cost</h1>
                    <p className='text-lg text-gray-500'>₹1,100 for two people (approx.) Without alcohol</p>
                </div>

                <div>
                    <h1 className="text-xl font-medium">More Info</h1>
                    <div className='flex gap-6'>
                        <ul>
                            <li>✅ Home Delivery</li>
                            <li>✅ Takeaway Available</li>
                            <li>✅ Full Bar Available</li>
                            <li>✅ Karaoke</li>
                            <li>✅ Live Sports Screening</li>
                            <li>✅ Indoor Seating</li>
                        </ul>
                        <ul>
                            <li>✅ Restricted Entry</li>
                            <li>✅ DJ</li>
                            <li>✅ Valet Parking Available</li>
                            <li>✅ Live Music</li>
                            <li>✅ Romantic Dining</li>
                            <li>✅ Wifi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Map />
            </div>
        </Container>
    )
}

export default page