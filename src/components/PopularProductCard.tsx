import { useState } from "react";
import { star } from "../assets/icons";

type ProudctCardProps = {
    imgURL: string, 
    name: string, 
    price: string, 
    rating: number[]
}

const PopularProductCard = ({ imgURL, name, price, rating }: ProudctCardProps) => {
    const [productModal, setProductModal] = useState(true);

    const handleProductModal = (img: string) => {
        console.log(img)
        setProductModal(false);
    };

    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
        {!productModal && (
            <>
            <div className="absolute w-96 h-96 bg-slate-200 flex flex-col items-center gap-3 z-10">
                <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate laborum quas distinctio ad excepturi tempore similique a
                officia dolorem deserunt expedita, maiores voluptates illum quos
                sint quam aliquid optio ratione.
                </p>
            </div>
            </>
        )}
        {productModal && (
            <>
            <img
                src={imgURL}
                alt={name}
                className="w-[280px] h-[280px]"
                onClick={() => handleProductModal(imgURL)}
            />
            <div className="mt-8 flex justify-start gap-2.5">
                {rating.map((num: number) => (
                    <img src={star} alt="rating" width={24} height={24} key={num} />
                ))}
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    {rating[rating.length - 1]}
                </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
                {price}
            </p>
            </>
        )}
        </div>
    );
};

export default PopularProductCard;
