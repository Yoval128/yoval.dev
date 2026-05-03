/*Node modules*/
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

/*styles */
import '@/index.css'

/*Components*/
import {App} from '@/App.tsx'
import Sidebar from "@/components/Sidebar.tsx";
import FloatingMenu from "@/components/FloatingMenu.tsx";
import Profile from "@/components/Profile.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className=" min-h-screen lg:flex justify-center lg:items-start lg:gap-10">
            <Sidebar/>
            <FloatingMenu/>
            <Profile/>
            <App/>
        </div>
    </StrictMode>
)
