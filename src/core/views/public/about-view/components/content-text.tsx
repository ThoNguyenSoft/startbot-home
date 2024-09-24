import { cn } from '@/lib/utils/utils'

const ContentText = ({ text, clx }: { text: string; clx?: string }) => {
  return <p className={cn('mt-3 text-base font-normal leading-[19px] text-[#D9D9D9]', clx)}>{text}</p>
}

export default ContentText
