function ContentEngine(){
    return(
        <div className="rounded-xl border purple-500/30 bg-bg-[#10182a] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                ✨ Content Engine
                </h2>

                <p className="mt-1 text-sm text-white/50">
                Let AI generate engaging X/Twitter posts tailored to your audience.
                </p>
            </div>

            <form onSubmtit={handleSubmit}>
                <div>
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

                <div>
                    <label htmlFor="tone" className="mt-4 text-sm text-white/50">
                     Tone
                    </label>

                    <input 
                        type="text" 
                        id="tone"
                        placeholder="Enter the tone of your post e.g. Funny, Serious, Informative"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div>
                    
                    <label htmlFor="audience" className="mt-4 text-sm text-white/50">
                     Audience
                    </label>

                    <input 
                        type="text" 
                        id="audience"
                        placeholder="Enter the audience of your post e.g. Professionals, Students, General Public"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>
            
            </form>

        </div>
    )

}

export default ContentEngine