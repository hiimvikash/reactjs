import { useParams } from "react-router-dom"

export function Profile(){
    const id = useParams().profileID;
    
    return (
        <>
        <h1>I m in profile {id}</h1>
        </>

    )
}