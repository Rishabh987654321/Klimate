import type { PropsWithChildren } from 'react'
import Header from './header'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from background to-muted'>
        <Header/>
        <main className='min-h-screen container mx-auto px-10 py-8'>
        {children}
        </main>
        <footer className='border-t backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 text-center text-gray-400 py-6'>
                <p>Made with ❤️ By Rishabh Rai</p>
            </div>
        </footer>
        </div>
  )
}

export default Layout