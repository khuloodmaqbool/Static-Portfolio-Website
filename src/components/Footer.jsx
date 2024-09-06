import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const socialIcons =[
    {
        icons: <FaLinkedinIn className="social-icons" />,
    },
    {
        icons:  <FaTwitter className="social-icons" />,
    },
    {
        icons:  <FiInstagram className="social-icons" />,
    },
    {
        icons: <FaFacebookF className="social-icons" />,
    }
]

export const Footer = ()=>{
    return(
        <>
<div className="bg-white rounded-lg py-3">
<ul className="flex justify-center mb-3">
{
    socialIcons.map((crntele) => {
        return(
            <>
            <li className="px-5">{crntele.icons}</li>
            </>
            
        )
    })
}

</ul>
<p className="text-black">Created by John | All Reserved Rights</p>



</div>
        </>
    )
}