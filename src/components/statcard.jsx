function StatCard({title, value, change,icon: Icon}){
return(
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        {Icon && <Icon/>}
        <p className="text-sm text-white/50">{title}</p>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        <p className="mt-2 text-sm text-green-400">{change}</p>
    </div>
)
}

export default StatCard