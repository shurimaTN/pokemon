'use client';
import { SWRConfig } from 'swr'
export const SWRProvider = ({ children, value }:any) => {
  return <SWRConfig value={{fallbackData:value}} >{children}</SWRConfig>
};