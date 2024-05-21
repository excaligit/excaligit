import React from 'react'
import { Trans } from 'react-i18next'
import { GoPackageDependents } from 'react-icons/go'

export default function Packages() {
  return (
    <section className='p-4 flex flex-col gap-1 leading-5 text-set4Text'>
      <div className='text-lg flex gap-1 items-center font-semibold text-white'>
        <GoPackageDependents size={24} />
        <Trans>Paket Kurulumu ve Kullanımı</Trans>
      </div>
      <div>
        <Trans>Yeni paket kurmak isteyebilirsiniz.</Trans>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-3'>
        <div className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>
          <div>
            1- <Trans>Yüklediğiniz paketin güncel olması gerekir.</Trans>
          </div>
        </div>
        <div className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>
          <div>
            2- <Trans>Daha önce yüklenmiş olmaması gereklidir.</Trans>
          </div>
        </div>
        <div className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>
          <div>
            3- <Trans>Gereksiz yere paket yüklenmemelidir.</Trans>
          </div>
        </div>
        <div className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>
          <div>
            4- <Trans>Kullanmadığınız paketleri silmelisiniz.</Trans>
          </div>
        </div>
      </div>
      <div className='text-sm text-red-500'>
        {`(!)`}
        <Trans>Bu durumlar yaşandığında tekrar aktif olamayacak şekilde engellenirsiniz.</Trans>
      </div>
    </section>
  )
}
