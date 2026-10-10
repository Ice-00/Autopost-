function RecentPosts() {
    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-[#10182a] p-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                    Recent Posts
                </h3>

                <a
                    className="text-sm text-blue-400 hover:text-blue-300"
                    href="/posts"
                >
                    View All 🡒
                </a>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        X
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-white">
                                Discipline Beats Motivation Everytime.
                            </p>

                            <span className="text-xs text-white/40">
                                2h ago
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-white/50">
                            Show up even when it's boring.
                        </p>

                        <span className="mt-2 inline-block rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
                            Posted
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentPosts;