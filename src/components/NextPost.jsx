function NextPost(){
    return(
        <div className="rounded-xl border border-purple-500/30 bg-[#10182a] p-6">

            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Next Post</h3>

                <a className="text-sm text-white/50" href="/scheduled">
                    View Schedule 🡒
                </a>
            </div>

            <div className="mt-6">
                <p className="text-sm text-white/50">
                    Today at 2:00 PM
                </p>

                <p className="mt-1 text-sm text-white leading-6">
                   Small consitent Actions Compound with time to create massive results. Start small, stay consistent, <br/> and watch your efforts pay off over time. #Consistency #Growth
                </p>
            </div>

        </div>
    )
}

export default NextPost