import { Banner as BannerType } from "@/types"

interface BannerProps {
    data: BannerType
}

const Banner: React.FC<BannerProps> = ({
    data
}) => {
    return(
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden w-full">
            <div className="rounded-xl relative aspace-square md:aspect-[2.4/1] overflow-hidden bg-cover" 
            style={{backgroundImage: `url(${data?.imageUrl})`}}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-blue-900 text-3xl sm:text-5xl lg:text-6l sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;