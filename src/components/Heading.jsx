export const Heading = (props) =>{
    return(
        <>
        <h1 className=" font-bold mt-20">{props.heading}</h1>
        <p  style={{color: "rgb(226,226,226)"}}  className="mb-12 mt-5 px-5">{props.para}</p>
        </>
    )
}