import { MdDeveloperBoard } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
const card = [
    {
        img_url: <MdDeveloperBoard className="w-6/12 mx-auto h-full" />,
        heading_txt: "Website Development",
        para_txt: "Designing and building custom, responsive websites using HTML, CSS, and JavaScript to ensure a smooth and interactive user experience across all devices."
    },
    {
        img_url: <SiAffinitydesigner className="w-6/12 mx-auto h-full" />,
        heading_txt: "UI/UX Design",
        para_txt: "Creating wireframes and prototypes, designing intuitive interfaces, and conducting usability testing to enhance the website ease of use and overall user satisfaction."
    },
    {
        img_url: <GrHostMaintenance className="w-6/12 mx-auto h-full" />,
        heading_txt: "Website Maintenance and Updates",
        para_txt: "Managing regular content updates, fixing bugs, optimizing website performance, and applying security patches to keep the site functional and secure"
    },
    {
        img_url: < MdOutlineIntegrationInstructions className="w-6/12 mx-auto h-full" />,
        heading_txt: "Integration of Third-Party Services",
        para_txt: "Incorporating APIs, content management systems, and e-commerce solutions to extend the website capabilities and provide additional features."
    },

]

export const ServiceCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 p-3 ">
                {
                    card.map((crntele) => {
                        return (
                            <>
                                <div style={{ background: "rgba(255, 255, 255, 0.2)", }} className="text-left p-3 m-3 shadow-md rounded-lg ">
                                    <div style={{ color: "rgb(255,195,80)", height: "100px" }} >{crntele.img_url}</div>
                                    <h5 className="font-bold my-4 text-center">{crntele.heading_txt}</h5>
                                    <p style={{ color: "rgb(226,226,226)" }} className="text-center pb-4" >{crntele.para_txt}</p>
                                </div>
                            </>
                        )
                    })
                }


            </div>
        </>
    )
} 