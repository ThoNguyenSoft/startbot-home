import { Button } from '@/core/components/atom/button'
import { Input } from '@/core/components/atom/input'
import ContentText from './components/content-text'
import TitleText from './components/title-text'

const Contact = () => {
  return (
    <div className='mb-[100px]'>
      <TitleText text='GET IN THE LOOP' clx='text-[40px]' />
      <div className='mb-10 flex flex-col items-center justify-center gap-5'>
        <div className='max-w-[604px]'>
          <ContentText text='Subscribe for more insights news from Startbot.AI' />
        </div>
        <Input
          className='size-full max-h-[72px] w-[603px] rounded-[100px] bg-[#FFFFFF] py-[30px] text-base text-[#000000]'
          placeholder='Enter Your Email'
        />
        <Button className='w-[144px] rounded-[100px] bg-[#D9D9D9] text-2xl font-normal text-[#000000] hover:bg-[#D7F67D]'>
          Subscribe
        </Button>
      </div>
    </div>
  )
}
export default Contact
