
const colorStyles = {
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "shadow-blue-500/20",
  },
  purple: {
    icon: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "shadow-purple-500/20",
  },
  green: {
    icon: "text-green-400",
    bg: "bg-green-500/10",
    glow: "shadow-green-500/20",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    glow: "shadow-amber-500/20",
  },
};


function StatCard({title, value, change,icon: Icon, color }){

    const isPositive = change.startsWith('↑');
    const styles = colorStyles[color]  || null ;



    return(
    
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            
            {Icon && styles ? (
                <div className={`w-fit rounded-lg p-2 ${styles.bg}`}>
                    <Icon className={styles.icon} size={20} />
                </div>
                ) : (
                Icon && <Icon />
            )}
              

            <p className="text-sm text-white/50">{title}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            <p className={`mt-2 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
            </p>

        </div>
    )
}

export default StatCard