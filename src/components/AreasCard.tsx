import type {AreasType} from '@/types'

const AreasCard = ({areas}: { areas: AreasType }) => {
    return (
        <div className="flex items-start justify-between rounded-2xl border border-border p-8
        bg-card hover:bg-accent transition-all duration-300
        hover:border-primary relative">
            <div>
                <h3 className='text-lg font-medium text-foreground mb-1'>{areas.title}</h3>
                <p className='text-muted-foreground mb-3'>{areas.desc}</p>
            </div>
            <div className='shrink-0'>
                {areas.icon}
            </div>
        </div>
    )
};

export default AreasCard;