import Image from 'next/image'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Solutions = () => {
  return (
    <div className='mb-[100px]'>
      <TitleText text='THE STARTBOT.AI SOLUTIONS' />
      <div className='my-10 mt-5 flex justify-center'>
        <div className='max-w-[604px]'>
          <ContentText text='We are bridging the gap between decentralized technology and education by offering an adaptive, AI-powered tool that evolves with the needs of the community. Our approach ensures:' />
        </div>
      </div>

      <div className='flex gap-[36px]'>
        {solutionArr.map((item, index) => (
          <div className='flex w-full max-w-[400px] flex-col items-center gap-5 rounded-[20px] bg-[#262626] p-[14px]'>
            <Image src={item.img} width={160} height={160} alt='solution' />
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
export default Solutions

const solutionArr = [
  {
    title: 'Verifiable Knowledge',
    content: `Every response includes the source of information, empowering you to dig deeper and verify insights.`,
    img: '/images/pages/check-img.png'
  },
  {
    title: 'Real-Time Updates',
    content: `With constant updates from official sources, thought leaders, and social media, your knowledge remains cutting-edge.`,
    img: '/images/pages/config-img.png'
  },
  {
    title: 'Community-Driven',
    content: `Knowledge miners across the Starknet ecosystem contribute and verify data, ensuring the integrity and accuracy of the knowledge base.`,
    img: '/images/pages/peoples-img.png'
  }
]
