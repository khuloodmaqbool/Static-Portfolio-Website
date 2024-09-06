
const range = [
    {
          label: "Web Development",
          val: 80
    },
    {
        label: "UI / UX Design",
        val: 85
  },
  {
    label: "Web Maintenance and Update",
    val: 70
},
{
    label: "Integration of Third-Party Services",
    val: 90
}

]



export const About = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 items-center justify-around">

                <div style={{ width: "100%" }}>
                    <img className="mx-auto" src="Aboutimg.png" alt="" style={{ width: "70%" }} />
                </div>

                <div className="text-left">
                    <h1 className=" font-bold ">About Me</h1>
                    <p style={{color: "rgb(226,226,226)"}} className="my-3">I'm [Your Name], a designer and developer focused on crafting innovative and user-friendly digital experiences. With a blend of creativity and technical skill, I’m dedicated to bringing your ideas to life.</p>

        {
             range.map((crntele)=>{
                return(
                    <>
                    <h5 className="mt-3">{crntele.label}</h5>
                    <input type="range" value={crntele.val} />
                    </>
                )
             })
        }


                </div>

            </div>

        </>
    )
}