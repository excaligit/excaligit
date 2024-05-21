import React from 'react'
import { TbFolderCode, TbFolderSymlink, TbFolder, TbFolderX, TbFolderCancel, TbFolderStar } from 'react-icons/tb'
import { VscDatabase } from 'react-icons/vsc'
import { FaRunning } from 'react-icons/fa'

export default function DocRU() {
  return (
    <section className='p-4 flex flex-col gap-1 leading-5 relative text-set4Text'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='text-lg flex gap-1 items-center font-semibold text-white'>
            <FaRunning size={24} />
            Вы готовы
          </div>
          <div>Структура файла и правила:</div>
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
              1- Чтобы получить доступ к файлам здесь со своей страницы, вы можете вызвать его как <span className='text-blue-500'>{`<img src='images/your-username/image1.png'/>`}</span>.
            </div>
            <div className='text-sm'>
              2- Вы можете создать <span className='underline'>папку</span> в формате '/images/your-username/' внутри папки Images и загрузить свои файлы.
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
              1- В настоящее время в содержимом файла icon.jsx есть константы, подобные этому <span className='text-blue-500'>{`export const CodeIcon = (props) => ( ... )`}</span> файл. Если вы хотите добавить что-то отличное от того, что здесь, вы можете добавить это в том же формате.
            </div>
            <div className='text-sm'>2- Если вы говорите, что вообще не хотите его использовать, я веду свой бизнес с помощью React-Icons, в нашем проекте установлены React-Icons.</div>
          </div>
        </section>
        <section className='bg-set6Back  p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderX color='#ef3b2a' />
              <div className='font-semibold text-white'>src/components/</div>
            </div>
            <div className='text-sm'>
              1- Это общий файл компонента проекта. Не следует <span className='underline'>вносить какие-либо изменения</span> здесь. <span className='text-red-500'>Внесенные здесь изменения не принимаются.</span>
            </div>
            <div className='text-sm'>
              2- Чтобы создать свои собственные компоненты, вы можете создать их в папке <span className='text-blue-500'>{`/pages/your-username/comComponents`}</span>.
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
              1- Вы можете увидеть список пользователей здесь, не забудьте добавить себя здесь.
              <span className='text-blue-500'>
                Важно! Созданные здесь пользователи должны быть <span className='underline'>уникальными</span>.
              </span>
            </div>
            <div className='text-sm'>2- Если вы забудете его добавить, вашего пользователя невозможно будет найти в разделе поиска. Добавляйте себя в том же порядке, не добавляйте другой лишней информации.</div>
            <div className='text-sm'>
              3- Чтобы поставить лайк покупке учащегося, найдите пользователя в файлах user.jsx и установите для него значение +1. <span className='text-blue-500 ml-1'>Важно: Вы можете увеличить оценку лайка понравившегося вам пользователя только на +1.</span>
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
              1- Это общий файл макета проекта. Не следует <span className='underline'>вносить какие-либо изменения</span> здесь. <span className='text-red-500'>Внесенные здесь изменения не принимаются.</span>
            </div>
            <div className='text-sm'>
              2- Общественные контейнеры предназначены для вашего использования. Это: <span className='text-blue-500'>{`<ContainMain>`}</span> и <span className='text-blue-500'>{`<ContainInner>`}</span>
              являются контейнерами. Позже вы увидите варианты использования этих контейнеров.
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
              1- Это зависит от вашего творчества. Здесь вы можете создать свою собственную страницу.{' '}
              <span className='text-blue-500'>
                Важно: имена создаваемых здесь страниц должны быть <span className='underline'>уникальными</span>.
              </span>
            </div>
            <div className='text-sm'>2- Вы можете создать свои компоненты/папку в этой папке и использовать ее по своему усмотрению.</div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderSymlink color='#039be5' />
              <div className='font-semibold text-white'>routes/routes.jsx</div>
            </div>
            <div className='text-sm'>
              1- Здесь вы можете перенаправить свою страницу.{' '}
              <span className='text-blue-500'>
                Важно! Создаваемые здесь перенаправления должны быть <span className='underline'>уникальными</span>.
              </span>
            </div>
            <div className='text-sm'>
              2- Вы можете выполнить маршрутизацию следующим образом: <span className='text-blue-500'>{`<Route path='/yourname' element={<YourName />} />`}</span>.
            </div>
            <div className='text-sm'>
              3- Имя компонента внутри элемента обязательно должно начинаться с заглавной буквы <span className='underline'>.</span> Следует использовать PascalCase, а не CamelCase.
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
