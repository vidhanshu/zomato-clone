"use client";

import React from 'react'
import Container from "@/src/common/components/Container"
import { REVIEWS } from '@/src/nagpur/utils/constants';
import ReviewCard from "@/src/nagpur/components/detail-page/reviews/ReviewCard"
import SelectField from '@/src/common/components/SelectField';

const Page = () => {
  const [value, setValue] = React.useState<string>("newest");

  const options = [
    {
      value: "newest",
      label: "Newest"
    },
    {
      value: "oldest",
      label: "Oldest"
    },
    {
      value: "highest",
      label: "Highest"
    },
    {
      value: "lowest",
      label: "Lowest"
    }
  ]

  return (
    <Container>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Reviews for <span className='font-bold'>Pablo - The Art Cafe Lounge</span></h1>
        <SelectField value={value} setValue={setValue} options={options} />
      </div>
      <div className="flex flex-col">
        {
          REVIEWS.map((e, _) => (
            <ReviewCard className='mb-4 border-b-2 py-4' {...e} key={_} />
          ))
        }
      </div>
    </Container>
  )
}

export default Page