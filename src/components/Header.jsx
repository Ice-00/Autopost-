import {Search, Moon, Bell} from "lucide-react"


function Header(){
    return(
        <header className=" flex items-center justify-between w-full border-b border-white/10 py-4 pt-0">
            <div className="flex w-96  items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Search />
                <input type="text" placeholder="Search..."/>
            </div>

            <div className="flex items-center gap-2 ">
                <button className="rounded-lg p-2 text-white hover:bg-white/10">
                    <Bell />
                </button>

                <button className="rounded-lg p-2 text-white hover:bg-white/10">
                    <Moon />
                </button>

                <div className="flex flex-col items-center" title="EZE">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                     E
                    </div>

                    <span className="text-xs text-white/50">Admin </span>
                </div>
            </div>
        </header>
    );
}


export default Header;