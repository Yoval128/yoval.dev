import {socialLinks} from "@/constants";
import {Button} from "@/components/ui/button.tsx";

const Profile = () => {
    return (
        <aside className="max-w-3xl m-6 p-6 rounded-lg lg:sticky lg:left-0 lg:w-96
bg-card text-card-foreground
border border-border">
            <div className="flex flex-col gap-4">
                <div className='flex items-center justify-between gap-x-10'>
                    <h1 className='text-3xl font-blod font-heading'>
                        Omar Yoval Aviles
                    </h1>
                    <p className='font-sans'>Desarrollador FullStack Junior</p>
                </div>

                <img src="/hero-placeholder.jpg" alt="Profile" className='lg:w-96 rounded-2xl
               object-cover'/>

                <div className="mt-6">
                    <p className='text-muted-foreground'>
                        Fullstack Developer Jr | Backend-focused
                    </p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Ubicado en:</p>
                    <p className="text-lg capitalize">Lerma, Estado de México</p>
                </div>

                <div className="flex gap-3 pt-2 text-neutral-500">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <a
                                target="_blank"
                                key={i}
                                href={social.link}
                                className='hover:text-primary border-2 border-neutral-500 p-2
                            rounded-full hover:border-primary
                            transition duration-200'
                            >
                                <Icon clasName='size-5'/>
                            </a>
                        )
                    })}
                </div>
                <Button className='mt-2' size='lg'>
                    ¡Trabajemos juntos!
                </Button>
            </div>
        </aside>
    )
};

export default Profile;