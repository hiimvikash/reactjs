import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function GitHub (){
    // const {user} = useParams();
    
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${user}`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])

    const data = useLoaderData();
    return <h1> Github followers : {data.followers}</h1>
}
export default GitHub;

const githubInfoLoader = async function(){
    const res = await fetch(`https://api.github.com/users/hiimvikash`);
    return res.json();
}
export {githubInfoLoader};
