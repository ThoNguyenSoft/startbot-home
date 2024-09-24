import Image from 'next/image'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Platform = () => {
  return (
    <div className='mb-[100px] w-full max-w-[1240px]'>
      <TitleText text='AVAILABLE PLATFORM' />
      <div className='relative flex w-full flex-col items-center gap-10'>
        <div className='absolute top-5 w-[409px]'>
          <Image src='/images/pages/robot-img.png' width={409} height={409} className='rounded-full' alt='robot-img' />
        </div>
        <div className='mt-10 flex w-full justify-between gap-5'>
          {teachArr.slice(0, 2).map((item, index) => (
            <div className='flex w-full max-w-[444px] flex-col items-center gap-5 rounded-[20px] bg-[#262626] p-[14px]'>
              <div className='w-full text-left'>
                <TitleText text={item.title} clx='text-2xl font-bold' />
                <ContentText text={item.content} />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-10 flex w-full justify-between gap-5'>
          {teachArr.slice(2, 4).map((item, index) => (
            <div className='flex w-full max-w-[444px] flex-col items-center gap-5 rounded-[20px] bg-[#262626] p-[14px]'>
              <div className='w-full text-left'>
                <TitleText text={item.title} clx='text-2xl font-bold' />
                <ContentText text={item.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Platform
const teachArr = [
  {
    title: 'Website',
    content: `Explore, learn, and ask questions through our website with multiple conversation modes tailored to your preferences.`
  },
  {
    title: 'X',
    content: `Interact with StartBot by posting questions with the syntax "/ask @StartBot_AI" and receive immediate, sourced answers.`
  },
  {
    title: 'Telegram & Discord Bots',
    content: `Discuss, learn, and ask questions in real-time with our bots integrated into your favorite community channels.`
  },
  {
    title: 'Weekly AI-Generated Newsletter',
    content: `Stay updated with a weekly newsletter curated by StartBot, summarizing the latest developments and knowledge contributions in the Starknet ecosystem.`
  }
]
