'use client'

import { Locale } from '@/app/[lang]/dictionaries'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import style from './SwitchLang.module.css'

type Props = {}

const SwitchLang: FC<Props> = () => {
  const router = useRouter()

  const switchLang = (lang: Locale) => {
    router.push(`/${lang}`)
  }

  return (
    <div>
      <button className={style.button} onClick={() => switchLang('en')}>
        English
      </button>
      <button className={style.button} onClick={() => switchLang('de')}>
        Deutch
      </button>
      <button className={style.button} onClick={() => switchLang('cn')}>
        Chinese
      </button>
    </div>
  )
}

export default SwitchLang
