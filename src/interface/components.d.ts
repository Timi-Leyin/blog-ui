import { ReactNode } from "react"

interface PostCardProps {
    thumbnail?:boolean,
    post:any,
    fontSize?:string,
    textSize?:string
}

interface ErrorWrapperProps {
    error?:boolean,
    children:ReactNode | any
}

interface PostGridProps {
    posts:any
}