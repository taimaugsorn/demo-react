import happy from "../assets/icons/happy.png"
import { useNavigate } from "react-router-dom";
function LandingPage(){
    const navigate = useNavigate();
    const handleToDetail=() =>{
        navigate("/details");
    }
return(
<div className="text-center">
    <p className="font-mono text-2xl font-bold uppercase">About Me</p>
    <div className="flex justify-center">
        <img src={happy} alt="happy" className="w-[10%] my-5"/>
    </div>
    <p className="text-md mt-2 font-bold text-[#918D87]  md:mx-36">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut orci a quam imperdiet ultricies sit amet a mauris. Duis interdum lectus vitae cursus lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis sem lacus, in lobortis dolor ornare sed. Curabitur at sollicitudin orci. Maecenas feugiat tellus iaculis risus tempus, id dictum purus porttitor. In sodales sapien id leo gravida, nec ullamcorper lacus feugiat. Nunc at erat quis dui efficitur dapibus. Duis scelerisque arcu et viverra eleifend. Vivamus sapien massa, pretium eu convallis at, viverra sit amet lectus. 
    </p>
    <br/>
    <button className="text-xl font-bold text-[#000000] underline" onClick={()=>handleToDetail()}>NEXT</button>
</div>
    );
}

export default LandingPage;