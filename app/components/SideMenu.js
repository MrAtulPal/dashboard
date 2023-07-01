import dashboard from "../../public/assets/dashboard.svg";
import Image from "next/image";

const SideMenu =()=>{

    const navLink = [
        "Dashboard","Application","Elements","Forms","Plugins","Elements","Datagrid","Settings"
    ]

    return(
        <>
            <div className="fixed w-64 h-full bg-slate-900 flex flex-col items-center mt-14" >
                <button className="rounded w-48 px-2 pb-1 text before:content-['+'] my-4 before:mr-1 before:text-2xl outline-0 hover:bg-slate-300 bg-white  ">New Item</button>
                <div>
                    <ul className="flex flex-col">
                            {
                                navLink.map((e,index)=>{
                                    return(
                                        <>
                                        <li key={index} className="flex first:border-t-2 last:border-b-0 items-center justify-between text-white py-4 pr-9 border-b-2 border-black w-64 pl-8 cursor-pointer">
                                        <div className="flex items-center">
                                        <Image  src={dashboard}/>
                                        <span  className="ml-0.5">{e}</span>
                                        </div>
                                        <div className="rotate-45 border-b-2 border-black border-r-2 h-2.5 w-2.5 border-white"></div>
                                        </li>
                                        </>

                                    )
                                })
                            }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideMenu;