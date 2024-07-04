'use client'

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps{
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const previewModal = usePreviewModal()

    const router = useRouter()

    const handlerClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    return (
        <div onClick={handlerClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 pb-6">
            {/* images action */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image alt="image" src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md"/>
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>}/>
                    </div>
                </div>
            </div>
            {/*description product*/}
            <div>
                <p className="font-semibold text-xl">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/*prices */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    )
}

export default ProductCard;