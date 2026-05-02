import type {ExperienceType} from "@/types";

const ExpCard = ({item}: { item: ExperienceType }) => {
    return (
        <div className="relative group">
            <div className="absolute -left-7.5 top-2 size-3
        bg-muted-foreground group-hover:bg-primary
        rounded-full transition duration-300">
        </div>

            <span className='text-muted-foreground lining-nums
             group-hover:text-primary transition duration-300'>
                    {item.year}
                </span>
            <h3 className="text-lg font-semibold mt-1 text-foreground">
                {item.title}
            </h3>
            <p className="text-sm mb-1">

                <span className="font-medium text-foreground">
                        {item.institute}
                    </span>
            </p>

            <p className='text-sm text-muted-foreground mb-4'>
                {item.desc}
            </p>
        </div>
    );
};

export default ExpCard;