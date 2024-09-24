import Image from 'next/image'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const AboutIntro = () => {
  return (
    <div className='mb-[100px]'>
      <div className='flex w-full items-center pl-[30px]'>
        <div className='max-w-[662px] text-left'>
          <TitleText text={controlContent.intro.title} />
          <ContentText text={controlContent.intro.content} />
        </div>{' '}
        <Image src='/images/pages/introl.png' width={500} height={400} alt='introl' />
      </div>

      <div className='flex w-full items-center pl-[40px]'>
        <Image src='/images/pages/ai-img.png' width={340} height={340} alt='ai-img' />
        <div className='ml-6 max-w-[662px] text-left'>
          <TitleText text={controlContent.about.title} />
          <ContentText text={controlContent.about.content} />
        </div>
      </div>

      <div className='flex w-full items-center pl-[30px]'>
        <div className='max-w-[662px] text-left'>
          <TitleText text={controlContent.vision.title} />
          <ContentText text={controlContent.vision.content} />
        </div>
        <Image src='/images/pages/vision-img.png' width={400} height={400} alt='introl' />
      </div>
    </div>
  )
}
export default AboutIntro

const controlContent = {
  intro: {
    title: 'START YOUR JOURNEY WITH AI',
    content: `Unlock the future of decentralized learning with StartBot.AI, the revolutionary
AI-powered social listening platform. Designed to provide verifiable knowledge from the community, for the community, StartBot.AI simplifies how you interact with crypto by delivering personalized, real-time educational insights.`
  },
  about: {
    title: 'ABOUT STARTBOT.AI',
    content: `In a rapidly evolving ecosystem like Starknet, accessing and learning about the latest technologies, including Cairo programming language, can be overwhelming. Startbot.AI brings everything you need to know right to your fingertips, whether you're a novice or an experienced developer. With its
AI-powered learning, Startbot adapts to your needs and provides accurate, reliable knowledge based on decentralized sources.`
  },
  vision: {
    title: 'OUR VISION',
    content: `At Startbot.AI, we believe in transforming education through decentralization, enabling equal access to high-quality knowledge worldwide. By building a decentralized AI education hub, we aim to foster a community-driven learning environment where everyone can learn and contribute to the ecosystem’s growth.`
  }
}
