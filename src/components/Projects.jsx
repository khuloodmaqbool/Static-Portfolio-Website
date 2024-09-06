
const card = [
    {
        para_txt: "UX case study",
        heading_txt: "Bally Website Research",
        img_url: "project1.png",

    },
    {
        para_txt: "UX case study",
        heading_txt: "Bally Website Research",
        img_url: "project2.png",
    },
    {
        para_txt: "UX case study",
        heading_txt: "Bally Website Research",
        img_url: "project3.png",
    },


]

export const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-7      ">

                {

                    card.map((crntele) => {
                        return (
                            <>

                                <div className="text-left rounded-xl">
                                    <img style={{ width: "100%" }} src={crntele.img_url} alt="" className="rounded-xl" />


                                    <div className="flex items-center justify-between mt-3">

                                        <div>
                                            <p style={{ color: "rgb(255,195,80)" }} className="my-2">{crntele.para_txt}</p>
                                            <h5 className="mt-0">{crntele.heading_txt}</h5>
                                        </div>

                                        <button className=" bg-custom-yellow text-white rounded-lg py-2.5 px-5 hover:bg-white hover:text-custom-yellow transition duration-300">Visit Now</button>
                                       


                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
