import Image from "next/image"

declare type lProps = {
    src: string,
    className: string,
    alt: string;
 
}   


export const CImage = ({src , className , alt }:lProps) => {
    return (
        <>
            <Image src={src} width={0} height={0} sizes="100%" className={className} alt={alt} loading="lazy" />
        </>
    )
}