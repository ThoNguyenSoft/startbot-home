import Image from 'next/image'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Technologies = () => {
  return (
    <div className='mb-[100px]'>
      <TitleText text='WHAT WE OFFER' />
      <div className='flex w-full items-center gap-10'>
        <div className='w-[409px]'>
          <Image
            src='/images/pages/stocklogov2.jpeg'
            width={409}
            height={409}
            className='rounded-full'
            alt='stocklogov2'
          />
        </div>
        <div className='mt-10 flex flex-col gap-5'>
          {teachArr.map((item, index) => (
            <div className='flex w-full max-w-[685px] flex-col items-center gap-5 rounded-[20px] bg-[#262626] p-[14px]'>
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

export default Technologies
const teachArr = [
  {
    title: 'AI-Powered Learning',
    content: `Startbot.AI uses advanced AI, including OpenAI’s ChatGPT, to deliver real-time, adaptive responses tailored to your learning level, with multi-modal options, all sourced from a decentralized knowledge base for accuracy.`
  },
  {
    title: 'Decentralized Knowledge Mining',
    content: `Startbot.AI’s decentralized knowledge collection ensures up-to-date, verified information through community contributions and real-time data from decentralized oracles, creating a continuously evolving and reliable resource.`
  },
  {
    title: 'Dynamic Query Processing',
    content: `Startbot.AI uses intent mapping and prompt engineering to deliver consistent, accurate responses, refining user inputs for precise and relevant answers.`
  },
  {
    title: 'Multi-Platform Integration',
    content: `Startbot.AI integrates across X, Telegram, Discord, and a web interface, ensuring users can easily access knowledge and engage with the platform from anywhere`
  }
]
