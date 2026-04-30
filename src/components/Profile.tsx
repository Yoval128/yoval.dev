import {socialLinks} from "@/constants";
import {Button} from "@/components/ui/button.tsx";

const Profile = () => {
    return (
        <aside className="max-w-3x1 border m-6
        border-neutral-600 bg-neutral-600 text-white
        p-6 rounded-lg lg:sticky lg:left-0  lg:w-96">
            <div className="flex flex-col gap-4">
                <div className='flex items-center justify-between gap-x-10'>
                    <h1 className='text-3xl font-blod'>
                        Omar Yoval Aviles
                    </h1>
                    <p>Desarrollador FullStack Junior</p>
                </div>
                <img src="/hero-placeholder.jpg" alt="Profile" className='lg:w-96 rounded-2xl
               object-cover'/>
                <div className="mt-6">
                    <p className="text-sm text-neutral-300">Especialización: </p>
                    <p className="text-lg capitalize">Aplicaciones web, integrar APIs y desarrollar soluciones escalables</p>
                </div>
                <div>
                    <p className="text-sm text-neutral-300">Ubicado en:</p>
                    <p className="text-lg capitalize">Lerma, Estado de México</p>
                </div>

                <div className="flex gap-3 pt-2 text-neutral-500">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <a
                            key={i}
                            href={social.link}
                            className='hover:text-primary border-2 border-neutral-500 p-2
                            rounded-full hover:border-primary
                            transition duration-200'
                            >
                                <Icon clasName='size-5' />
                            </a>
                        )
                    })}
                </div>
                <Button className='mt-2' size='lg'>
                    Lets Work!
                </Button>
            </div>
        </aside>
    )
};

export default Profile;