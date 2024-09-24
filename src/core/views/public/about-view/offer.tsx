import Image from 'next/image'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Offer = () => {
  return (
    <div className='mb-[100px]'>
      <TitleText text='WHAT WE OFFER' />
      <div className='mt-10 flex gap-[36px]'>
        {offerArr.map((item, index) => (
          <div className='flex w-full max-w-[400px] flex-col items-center gap-5 rounded-[20px] bg-[#262626] p-[14px]'>
            <Image src={item.img} width={160} height={160} alt='offer' />
            <div className='max-w-[662px] text-center'>
              <TitleText text={item.title} clx='text-2xl font-bold' />
              <ContentText text={item.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Offer

const offerArr = [
  {
    title: 'Instant Knowledge Access',
    content: `Get relevant insights about Starknet, Cairo, and its technologies instantly. Startbot.AI taps into verified knowledge assets from official project documentation, research papers, and even social media posts to deliver trustworthy information.`,
    img: '/images/pages/book.png'
  },
  {
    title: 'Adaptive Learning',
    content: `StartBot personalizes your learning experience based on your queries, whether you’re learning the basics or diving into advanced concepts.`,
    img: '/images/pages/book2.png'
  },
  {
    title: 'Decentralized by Design',
    content: `Information provided by StartBot is based on contributions from the community and is fully decentralized, ensuring transparency and verifiability.`,
    img: '/images/pages/block.png'
  }
]
