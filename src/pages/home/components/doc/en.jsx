import React from 'react'
import { TbFolderCode, TbFolderSymlink, TbFolder, TbFolderX, TbFolderCancel, TbFolderStar } from 'react-icons/tb'
import { VscDatabase } from 'react-icons/vsc'
import { FaRunning } from 'react-icons/fa'

export default function DocEN() {
  return (
    <section className='p-4 flex flex-col gap-1 leading-5 relative text-set4Text'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='text-lg flex gap-1 items-center font-semibold text-white'>
            <FaRunning size={24} />
            You are ready
          </div>
          <div>File structure and rules</div>
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
              1- To access the files here from your own page, you can call it as <span className='text-blue-500'>{`<img src='images/your-username/image1.png'/>`}</span>.
            </div>
            <div className='text-sm'>
              2- You can create a <span className='underline'>folder</span> in the Images folder in the form of '/images/your-username/' and upload your files.
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
              1- There are already consts in the content of the icons.jsx file like <span className='text-blue-500'>{`export const CodeIcon = (props) => ( ... )`}</span>. If you want to add more, you can add them in the same format.
            </div>
            <div className='text-sm'>2- If you don't want to use it at all and prefer to handle things with React-Icons, react-icons is already installed in our project.</div>
          </div>
        </section>
        <section className='bg-set6Back  p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderX color='#ef3b2a' />
              <div className='font-semibold text-white'>src/components/</div>
            </div>
            <div className='text-sm'>
              1- This is the general component file of the project. You should not make any changes here. <span className='text-red-500'>The changes made here will not be accepted.</span>
            </div>
            <div className='text-sm'>
              2- You can create your own components under the <span className='text-blue-500'>{`/pages/your-username/components`}</span> folder.
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
              1- This is the user data file. You can add your information here. <span className='text-blue-500'>Important: The information you add here will be displayed on the find page.</span>
            </div>
            <div className='text-sm'>2- You can add your information in the form of an array.</div>
            <div className='text-sm'>
              3- To like a student's purchase, find the user in the user.jsx files and set the like value to +1. <span className='text-blue-500 ml-1'>Important: You can only increase the like value of the user you like by +1.</span>
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
              1- This is the general layout file of the project. You should not make any changes here. <span className='text-red-500'>The changes made here will not be accepted.</span>
            </div>
            <div className='text-sm'>
              2- General containers have been defined for your usage. These are: <span className='text-blue-500'>{`<ContainMain>`}</span> and <span className='text-blue-500'>{`<ContainInner>`}</span>
              containers. You will see examples of how to use these containers later.
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
              1- This is your main page. You can create your own components here. <span className='text-blue-500'>Important: The components you create here must be unique.</span>
            </div>
            <div className='text-sm'>2- You can create and use your components under the components/ folder in this directory as you wish.</div>
          </div>
        </section>
        <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <TbFolderSymlink color='#039be5' />
              <div className='font-semibold text-white'>routes/routes.jsx</div>
            </div>
            <div className='text-sm'>
              1- Here you can make the redirection of your page.{' '}
              <span className='text-blue-500'>
                Important: The redirections created here should be <span className='underline'>unique</span>.
              </span>
            </div>
            <div className='text-sm'>
              2- You can do the redirection like this: <span className='text-blue-500'>{`<Route path='/yourname' element={<YourName />} />`}</span>.
            </div>
            <div className='text-sm'>
              3- The component name inside the Element must start with a <span className='underline'>capital letter</span>. Use PascalCase instead of camelCase.
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
