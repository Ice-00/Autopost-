import { Pencil, Calendar,ChartLine,Settings } from "lucide-react";


function QuickActions(){
    return(
        <div>
            <h3 className="text-sm font-bold">⚡ Quick Actions</h3>

            <div className=" mt-2 flex flex-1 gap-2">

               
                    <div className="flex gap-3 items-start rounded-lg border border-purple-300 bg-purple-400/50 p-2">

                        <div className="mt-2">
                            <Pencil />
                        </div>

                        <div className=" flex flex-col">
                            <p>
                                Generate Post
                            </p>
                            <span className="text-xs text-white/50 ">Create with AI </span>
                        </div>

                    </div>
              

               
                    <div className="flex gap-3 items-start rounded-lg border border-blue-300 bg-blue-400/50 p-2">
                        <div className="mt-2">
                            <Calendar />
                        </div>
                        <div className=" flex flex-col">
                            <p>
                                View schedule
                            </p>
                            <span className="text-xs text-white/50 "> Manage Posts</span>
                        </div>
                    </div>
               


               
                    <div className="flex gap-3 items-start rounded-lg border border-green-300 bg-green-400/50 p-2">
                        <div className="mt-2">
                            <ChartLine />
                        </div>
                        <div className=" flex flex-col">
                            <p>
                                View Analytics
                            </p>
                            <span className="text-xs text-white/50 "> Track Performance </span>
                        </div>
                    </div>
              

        
                
                    <div className="flex gap-3 items-start rounded-lg border border-blue-700 bg-blue-400/50 p-2">
                        <div className="mt-2">
                            <Settings />
                        </div>
                        <div className=" flex flex-col">
                            <p>
                                Settings
                            </p>
                            <span className="text-xs text-white/50 "> Customise </span>
                        </div>
                    </div>
              


            </div>

        </div>
    );
}

export default QuickActions;