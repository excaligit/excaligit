import React from 'react'
import { TbFolderCode, TbFolderSymlink, TbFolder, TbFolderX, TbFolderCancel, TbFolderStar } from 'react-icons/tb'
import { VscDatabase } from 'react-icons/vsc'
import { FaRunning } from 'react-icons/fa'

export default function DocTR() {
  return (
    <section className='p-4 flex flex-col gap-1 leading-5 relative text-set4Text'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='text-lg flex gap-1 items-center font-semibold text-white'>
            <FaRunning size={24} />
            Hazırsınız
          </div>
          <div>Dosya yapısı ve kurallar:</div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 mt-4`}>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderSymlink color='#039be5' />
              <div className='font-semibold text-white'>public/images</div>
            </div>
            <div className='text-sm'>
              1- Kendi oluşturduğunuz sayfanızdan buradaki dosyalara ulaşmak için <span className='text-blue-500'>{`<img src='images/your-username/image1.png'/>`}</span> şeklinde çağırabilirsiniz.
            </div>
            <div className='text-sm'>
              2- Images klasörünün içine '/images/your-username/' biçiminde <span className='underline'>klasör</span> oluşturup dosyalarınızı yükleyebilirsiniz.
            </div>
          </div>
        </section>
        <section className='bg-set6Back  p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderCode color='#4caf50' />
              <div className='font-semibold text-white'>src/assets/icons/icons.jsx</div>
            </div>
            <div className='text-sm'>
              1- Halihazırda icons.jsx dosyasının içeriğinde <span className='text-blue-500'>{`export const CodeIcon = (props) => ( ... )`}</span> buna benzer constlar mevcut. Buradakilerin dışında eklemek isterseniz, aynı formatta ekleyebilirsiniz.
            </div>
            <div className='text-sm'>2- Hiç kullanmak istemiyorum ben React-Icons ile işlerimi yürütüyorum diyorsanız projemizde react-icons yüklü durumdadır.</div>
          </div>
        </section>
        <section className='bg-set6Back  p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderX color='#ef3b2a' />
              <div className='font-semibold text-white'>src/components/</div>
            </div>
            <div className='text-sm'>
              1- Burası projenin genel component dosyasıdır. Burada düzenleme <span className='underline'>yapmamanız</span> gerekiyor. <span className='text-red-500'>Burada yapılmış olan düzenlemeler kabul edilmeyecek.</span>
            </div>
            <div className='text-sm'>
              2- Kendi componentlerinizi yaratmak için <span className='text-blue-500'>{`/pages/your-username/components`}</span> klasörünün altında yaratabilirsiniz.
            </div>
          </div>
        </section>
        <section className='bg-set6Back  p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <VscDatabase color='#ffca28' />
              <div className='font-semibold text-white'>data/users.jsx</div>
            </div>
            <div className='text-sm'>
              1- Burada kullanıcı listesini görebilirsiniz, buraya kendinizi eklemeyi unutmayın.
              <span className='text-blue-500 ml-1'>
                Önemli: Burada oluşturulan kullanıcılar <span className='underline'>benzersiz</span> olmalıdır.
              </span>
            </div>
            <div className='text-sm'>2- Eklemeyi unutursanız, find kısmında kullanıcınız bulunamaz. Kendinizi aynı düzen içerisinde ekleyin, gereksiz başka bilgi eklemeyin.</div>
            <div className='text-sm'>
              3- Bir kullanıcının yaptığı çalışmayı beğenmek için user.jsx dosyasının içinde kullanıcıyı bulun ve like değerini +1 yapın. <span className='text-blue-500 ml-1'>Önemli: Beğendiğiniz kullanıcının like değerini sadece +1 olarak artırabilirsiniz.</span>
            </div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderX color='#ef3b2a' />
              <div className='font-semibold text-white'>src/layout/</div>
            </div>
            <div className='text-sm'>
              1- Burası projenin genel layout dosyasıdır. Burada düzenleme <span className='underline'>yapmamanız</span> gerekiyor. <span className='text-red-500'>Burada yapılmış olan düzenlemeler kabul edilmeyecek.</span>
            </div>
            <div className='text-sm'>
              2- Sizin kullanımız için genel kapsayıcılar belirlenmiştir. Bunlar: <span className='text-blue-500'>{`<ContainMain>`}</span> ve <span className='text-blue-500'>{`<ContainInner>`}</span>
              kapsayıcılarıdır. Bu kapsayıcıların kullanım örneklerini daha sonra göreceksiniz.
            </div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderStar color='#4caf50' />
              <div className='font-semibold text-white'>pages/your-username</div>
            </div>
            <div className='text-sm'>
              1- Burası sizin yaratıcılığınıza kalmış. Kendi sayfanızı burada oluşturabilirsiniz.{' '}
              <span className='text-blue-500'>
                Önemli: Burada oluşturulan sayfaların isimleri <span className='underline'>benzersiz</span> olmalıdır.
              </span>
            </div>
            <div className='text-sm'>2- Bu klasörün altında components/ klasörünüzü yaratabilir dilediğiniz gibi kullanabilirsiniz.</div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderSymlink color='#039be5' />
              <div className='font-semibold text-white'>routes/routes.jsx</div>
            </div>
            <div className='text-sm'>
              1- Burada sayfanızın yönlendirmesini yapabilirsiniz.{' '}
              <span className='text-blue-500'>
                Önemli: Burada oluşturulan yönlendirmeler <span className='underline'>benzersiz</span> olmalıdır.
              </span>
            </div>
            <div className='text-sm'>
              2- Yönlendirmeyi <span className='text-blue-500'>{`<Route path='/yourname' element={<YourName />} />`}</span> bu şekilde yapabilirsiniz.
            </div>
            <div className='text-sm'>
              3- Element'in içindeki component ismi kesinlikle <span className='underline'>Büyük harfle başlamalıdır.</span> camelCase değil PascalCase kullanılmalı.
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
