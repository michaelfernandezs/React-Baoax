import { CiMail } from "react-icons/ci";
import { FaArrowAltCircleDown, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaTwitter, FaVoicemail } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer=()=>{
   

    return(

        <div>


<footer className="bg-gradient-to-r from-red-500 to-red-600 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1   md:grid-cols-3 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] font-semibold text-white py-2 uppercase">Baoax</span>
                    <p> Banco de Alimentos de Oaxaca, es una Asociación Civil sin fines de lucro</p>
                </div>
            
          
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Contacto</h2>

            
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" >
                    <FaLocationDot/>Diamante 117, Bugambilias, 68010 Oaxaca
                </a>
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" >
                    <FaMailBulk />banco_alimentos@baoaxca.org.mx

                </a>
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" >
                    <FaPhone/>9515168450
                </a>
            </div>
            <div>
            <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/michaelfernandezs">
                    <FaInstagram/>
                </a>
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/michael-jeffrey-fern%C3%A1ndez-609b13149/">
                    <FaFacebook/>
                </a>
                <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.instagram.com/mikefdz11/">
                    <FaTwitter/>
                </a>
            </div>
            </div>

        </div>
        </footer>
        </div>
    )

}

export default Footer;