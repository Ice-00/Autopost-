function ContentEngine(){
    return(
        <div className="mt-8 rounded-xl border border-blue-800 blue-500/30 bg-bg-[#10182a] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                ✨ Content Engine
                </h2>

                <p className="mt-1 text-sm text-white/50">
                Let AI generate engaging X/Twitter posts tailored to your audience.
                </p>
            </div>

            <form className="mt-4">
                <div className="mt-4">
                    <label  htmlFor="topic" className="text-sm text-white/50">
                     Topic
                    </label>
                
                    <input 
                        type="text" 
                        id="topic"
                        placeholder="Enter a topic for your post e.g. AI, Tech, Marketing"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>


                <div className="mt-4">
                    
                    <label htmlFor="audience" className=" text-sm text-white/50">
                     Audience
                    </label>

                    <input 
                        type="text" 
                        id="audience"
                        placeholder="Enter the audience of your post e.g. Professionals, Students, General Public"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>



               <div className="grid grid-cols-2 gap-4">
                   
                   <div className="">
                       <label htmlFor="tone" className="text-sm text-white/50">
                        Tone
                       </label>
                      <select id="tone" className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           <option value="professional">Professional</option>
                           <option value="casual">Casual</option>
                           <option value="humorous">Humorous</option>
                           <option value="inspirational">Inspirational</option>
                      </select>
                   </div>

                   <div className="">
                       <label htmlFor="frequency" className="text-sm text-white/50">
                            Posting Frequency
                       </label>

                       <select id="frequency" className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                           <option value="daily">Once a Day</option>
                           <option value="Twice">Twice a Day </option>
                           <option value="Thrice">Thrice a day </option>
                       </select>
                   </div>
               </div>
            
            </form>
            
            <button type="submit" className="mt-6 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Generate Post 🡒
            </button>

        </div>
    )

}

export default ContentEngine