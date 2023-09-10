import user from "../assets/icons/user.png"
import facebook from "../assets/icons/facebook.png"
import line from "../assets/icons/line.png"
import ins from "../assets/icons/instagram.png"
const Navbar= () => {
    return(
        <div className="flex justify-between items-center">
            <img src={user} alt="user" width={50}/>
            <ul className="hidden md:flex">
                <li className="px-2"><a href="https://www.facebook.com/tapakorn.aimaugsorn.9" target="_blank"><img src={facebook} alt="facebook" width={30} className="cursor-pointer"/></a></li>
                <li className="px-2"><a href="https://www.instagram.com/first.tpk/" target="_blank"><img src={ins} alt="instagram" width={30} className="cursor-pointer"/></a></li>
                <li className="px-2"><a href="https://www.instagram.com/first.tpk/" target="_blank"><img src={line} alt="line" width={30} className="cursor-pointer"/></a></li>
            </ul>
        </div>
    )
}
  export default Navbar