import DiscusIcon from 'public/icons/DiscusIcon'
import FlyIcon from 'public/icons/FlyIcon'
import HomeIcon from 'public/icons/HomeIcon'
import MailIcon from 'public/icons/MailIcon'
import TetleIcon from 'public/icons/TetleIcon'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Footer = () => {
  return (
    <div className='mb-[100px]'>
      <div className='flex w-full items-center gap-3'>
        {footArr.map((item, index) => (
          <button key={index} className='flex items-center gap-2.5 rounded-[20px] bg-[#262626] p-[10px]'>
            <div className=''>{item.img}</div>
            <ContentText clx='mt-0' text={item.title} />
          </button>
        ))}
      </div>
      <TitleText text='Startbot.AI – Start Your Web3 Journey With AI' clx='mt-5 text-[40px]' />
    </div>
  )
}
export default Footer

const footArr = [
  {
    title: 'startbot.ai',
    img: <HomeIcon />
  },
  {
    title: 'x.com/startbot_ai',
    img: <TetleIcon />
  },
  {
    title: 'Join our community',
    img: <FlyIcon />
  },
  {
    title: 'Ask questions and connect',
    img: <DiscusIcon />
  },
  {
    title: 'Subscribe for updates',
    img: <MailIcon />
  }
]
