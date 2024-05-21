import React from 'react'
import { TbFolderCode, TbFolderSymlink, TbFolder, TbFolderX, TbFolderCancel, TbFolderStar } from 'react-icons/tb'
import { VscDatabase } from 'react-icons/vsc'
import { FaRunning } from 'react-icons/fa'

export default function DocDE() {
  return (
    <section className='p-4 flex flex-col gap-1 leading-5 relative text-set4Text'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='text-lg flex gap-1 items-center font-semibold text-white'>
            <FaRunning size={24} />
            Bereit
          </div>
          <div>Dateistruktur und Regeln:</div>
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
              1- Um von Ihrer eigenen Seite aus auf die Dateien hier zuzugreifen, können Sie sie als <span className='text-blue-500'>{`<img src='images/your-username/image1.png'/>`}</span> aufrufen..
            </div>
            <div className='text-sm'>
              2- Sie können im Ordner „Bilder“ einen <span className='underline'>Ordner</span> im Format „/images/your-username/“ erstellen und Ihre Dateien hochladen.
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
              1- Dies ist die allgemeine Komponentendatei des Projekts. Sie sollten hier keine <span className='underline'>Änderungen vornehmen</span>. <span className='text-red-500'>Hier vorgenommene Änderungen werden nicht akzeptiert.</span>
            </div>
            <div className='text-sm'>
              2- Um Ihre eigenen Komponenten zu erstellen, können Sie diese im Ordner <span className='text-blue-500'>{`/pages/your-username/components`}</span> erstellen.
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
              1- Die Benutzerliste finden Sie hier. Vergessen Sie nicht, sich hier hinzuzufügen.
              <span className='text-blue-500'>
                Wichtig: Hier erstellte Benutzer müssen <span className='underline'>eindeutig</span> sein.
              </span>
            </div>
            <div className='text-sm'>2- Wenn Sie vergessen, es hinzuzufügen, kann Ihr Benutzer im Suchbereich nicht gefunden werden. Fügen Sie sich selbst in der gleichen Reihenfolge hinzu, fügen Sie keine weiteren unnötigen Informationen hinzu.</div>
            <div className='text-sm'>
              3- Um den Kauf eines Studenten zu liken, suchen Sie den Benutzer in den user.jsx-Dateien und setzen Sie den Like-Wert auf +1. <span className='text-blue-500 ml-1'>Wichtig: Du kannst den Like-Wert des Nutzers, den du magst, nur um +1 erhöhen.</span>
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
              1- Dies ist die allgemeine Layoutdatei des Projekts. Sie sollten hier keine <span className='underline'>Änderungen vornehmen</span>. <span className='text-red-500'>Hier vorgenommene Änderungen werden nicht akzeptiert.</span>
            </div>
            <div className='text-sm'>
              2- Für Ihre Nutzung sind öffentliche Container vorgesehen. Dies sind: <span className='text-blue-500'>{`<ContainMain>`}</span> und <span className='text-blue-500'>{`<ContainInner>`}</span>
              sind Container. Anwendungsfälle für diese Container sehen Sie später.
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
              1- Das bleibt Ihrer Kreativität überlassen. Hier können Sie Ihre eigene Seite erstellen.{' '}
              <span className='text-blue-500'>
                Wichtig: Die Namen der hier erstellten Seiten müssen <span className='underline'>eindeutig</span> sein.
              </span>
            </div>
            <div className='text-sm'>2- Sie können Ihren Komponenten-/Ordner unter diesem Ordner erstellen und ihn nach Ihren Wünschen verwenden.</div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderSymlink color='#039be5' />
              <div className='font-semibold text-white'>routes/routes.jsx</div>
            </div>
            <div className='text-sm'>
              1- Hier können Sie Ihre Seite umleiten.{' '}
              <span className='text-blue-500'>
                Wichtig: Hier erstellte Weiterleitungen müssen <span className='underline'>einzigartig</span> sein.
              </span>
            </div>
            <div className='text-sm'>
              2- Sie können das Routing wie folgt durchführen: <span className='text-blue-500'>{`<Route path='/yourname' element={<YourName />} />`}</span>.
            </div>
            <div className='text-sm'>
              3- Der Komponentenname innerhalb des Elements muss unbedingt mit einem Großbuchstaben <span className='underline'> beginnen.</span> Es sollte PascalCase und nicht CamelCase verwendet werden.
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
