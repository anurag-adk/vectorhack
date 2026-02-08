import React from 'react'

export default function Prizes() {
  return (
    <section className='w-full py-12'>
      <h2 className='text-3xl font-bold text-center mb-8 text-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)]'>Prizes and Awards</h2>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-center">
          <div className="min-w-100 max-w-160 md:max-w-200 md:min-w-150  rounded-2xl border border-[#4aacd3] bg-linear-to-br from-[rgba(74,172,211,0.1)] to-[rgba(81,60,151,0.1)] p-8 backdrop-blur-sm">
            <img src="/Asset 3.svg" alt="" className='object-contain'/>
          </div>
        </div>

      </div>
    </section>
  )
}
