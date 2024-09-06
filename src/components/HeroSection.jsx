export const HeroSection = () => {
    return (
        <>


            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 items-center justify-center">
                <div className="text-left">
                    <p>Hi i am</p>
                    <h5 style={{color: "rgb(255,195,80)"
                    }} className="my-2">John Smith</h5>
                    <h1 className=" font-bold ">FRONT END <br /> <span style={{color: "rgb(255,195,80)"}}>DEVELOPER</span></h1>
                    <p style={{color: "rgb(226,226,226)"}} className="my-4">I create visually stunning and user-friendly websites that deliver seamless experiences. With expertise in HTML, CSS, JavaScript, and the latest front-end technologies, I'm here to turn your ideas into reality. Let's build something exceptional together!</p>
                    <button>Hire Me</button>
                </div>

                <div>
                    <img className="mx-auto" style={{
                        "width": "90%"
                    }} src="HeroSecImg.png" alt="" />
                </div>
            </div>
        </>
    )
}