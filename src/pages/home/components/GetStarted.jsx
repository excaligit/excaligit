import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'sonner'
import { IoCopyOutline, IoCopy } from 'react-icons/io5'
import { VscDebugStart } from 'react-icons/vsc'
import { Trans } from 'react-i18next'

export default function GetStarted() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section className='p-4 flex flex-col gap-1 leading-5 text-set4Text'>
      <div className='text-lg flex gap-1 items-center font-semibold text-white'>
        <VscDebugStart size={24} />
        <Trans>Başlarken</Trans>
      </div>
      <div>
        <Trans>CV'nizi Excaligit'de yayınlamak için yapmanız gerekenler:</Trans>
      </div>
      <section className={`bg-set6Back ${copied && 'border-yellow-400 bg-yellow-700/10 text-white animate-pulsefast'} mt-6 duration-100 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border`}>
        <div className='flex gap-1 break-all'>
          <div className=''>
            <span className='text-blue-500 '>git</span> clone https://github.com/excaligit/excaligit.git
          </div>
        </div>
        <CopyToClipboard text='git clone https://github.com/excaligit/excaligit.git' onCopy={handleCopy} className='hover:text-blue-500 cursor-pointer'>
          {copied ? (
            <span className='text-yellow-400 '>
              <IoCopy size={20} />
            </span>
          ) : (
            <IoCopyOutline size={20} />
          )}
        </CopyToClipboard>
      </section>
      <div className='text-sm'>
        <Trans>Repoyu indirin</Trans>
      </div>
      <section className='bg-set6Back mt-6 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='flex gap-1 break-all'>
          <div className='text-blue-500 '>
            npm i <span className='text-set4Text'>|</span> pnpm i <span className='text-set4Text'>|</span> yarn i <span className='text-set4Text'>|</span> bun i
          </div>
        </div>
      </section>
      <div className='text-sm'>
        <Trans>Kurulumu yapın</Trans>
      </div>

      <section className='bg-set6Back mt-6 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='flex gap-1 break-all'>
          <div className=''>
            <span className='text-blue-500 '>git</span> checkout -b your-username
          </div>
        </div>
      </section>
      <div className='text-sm'>
        <Trans>Kendi adınıza bir branch oluşturun.</Trans>
      </div>

      <div className='text-sm mt-6 italic'>
        <Trans>// Dosya yapısı ve kurallar kısmına uygun şekilde kendi düzenlemelerinizi yapın.</Trans>
      </div>

      <section className='bg-set6Back mt-6 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='flex gap-1 break-all'>
          <div className='text-blue-500 '>git</div>
          <div>add .</div>
        </div>
      </section>
      <div className='text-sm'>
        <Trans>Yaptığınız değişiklikleri ekleyin.</Trans>
      </div>

      <section className='bg-set6Back mt-6 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='flex gap-1 break-all'>
          <div className=''>
            <span className='text-blue-500 '>git</span> commit -m 'username + <Trans>kullanıcı değişikliklerinin açıklaması</Trans>'
          </div>
        </div>
      </section>
      <div className='text-sm'>
        <Trans>Kullanıcı adınız ile başlayan bir açıklama ekleyin ve commit edin.</Trans>
      </div>

      <section className='bg-set6Back mt-6 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='flex gap-1 break-all'>
          <div className=''>
            <span className='text-blue-500 '>git</span> push origin your-username
          </div>
        </div>
      </section>
      <div className='text-sm'>
        <Trans>Kullanıcı adına açtığınız branch için değişikliklerinizi gönderin.</Trans>
      </div>
    </section>
  )
}
