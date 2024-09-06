
const card = [
    {
        para_txt: "Working with Apex Digital has been a pleasure. Their UI/UX design significantly improved our website's user engagement. Our bounce rates decreased, and customer satisfaction increased."
    },
    {
        para_txt: "Working with Apex Digital has been a pleasure. Their UI/UX design significantly improved our website's user engagement. Our bounce rates decreased, and customer satisfaction increased."
    }
]
export const Testimonial = () => {
    return (
        <>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                {
                    card.map((crntele) => {
                        return (
                            <>
                                <div className="w-2/3 my-3 mx-auto p-4 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>

                                    <img className="w-1/4" src="review1.png" alt="" />
                                    <p className="my-5">{crntele.para_txt}</p>
                                    <hr />
                                    <div className="flex my-5 justify-between">
                                        <p>CEO & Founder</p>
                                        <img className="w-1/5" src="review2.png" alt="" />
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