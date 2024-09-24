/* eslint-disable @typescript-eslint/no-explicit-any */

export type TProps = {
  error?: string
  htmlFor?: string
  label?: string
  isRequired?: boolean
}
export interface RootLayoutProps {
  children: React.ReactNode
  params: { lng: string }
}
