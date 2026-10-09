function NextPost(){
    return(
        <div className="mt-8 rounded-xl border border-purple-500/30 bg-[#10182a] p-6">

            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Next Post</h3>

                <a className="text-sm text-white/50" href="/scheduled">
                    View Schedule 🡒
                </a>
            </div>

            <div className="mt-6 mb-2 rounded-lg border border-white/10 bg-[#10182a] p-4">
                <p className="text-sm text-white/50">
                    Today at 2:00 PM
                </p>

                <p className="mt-1 text-sm text-white leading-6">
                   Small consitent Actions Compound with time to create massive results. Start small, stay consistent, <br/> and watch your efforts pay off over time. #Consistency #Growth
                </p>
            </div>

            <div className="mt-6 flex gap-2">
                <button className="flex-1 rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
                    Edit Post
                </button>

                <button className="flex-1 rounded-lg bg-purple-500/20 px-4 py-2 text-white hover:bg-purple-600/20">
                    Post Now
                </button>
            </div>

        </div>
    )
}

export default NextPost