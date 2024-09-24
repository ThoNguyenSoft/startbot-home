import { cn } from '@/lib/utils/utils'

const TitleText = ({ text, clx }: { text: string; clx?: string }) => {
  return <h1 className={cn('text-[32px] font-bold leading-[39px] text-[#FFFFFF]', clx)}>{text}</h1>
}

export default TitleText
