const statusColorVar: Record<string, string> = {
  OPEN: 'var(--status-open)',
  FULL: 'var(--status-full)',
  CLOSED: 'var(--status-closed)',
}

interface StatCardProps {
  label: string
  value: string
  hint?: string
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      {hint && <p>{hint}</p>}
    </div>
  )
}
interface StatusDonutChartProps { data: { status: string; label: string; count: number }[] }

export function StatusDonutChart({ data }: StatusDonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.count, 0)
  let cumulative = 0
  const stops = data.map((item) => {
    const color = statusColorVar[item.status] ?? 'var(--muted)'
    const start = total > 0 ? (cumulative / total) * 360 : 0
    cumulative += item.count
    const end = total > 0 ? (cumulative / total) * 360 : 0
    return `${color} ${start}deg ${end}deg`
  })

  const background = total > 0 ? `conic-gradient(${stops.join(', ')})` : 'var(--line)'

  return (
    <div className="donut-chart">
      <div className="donut-visual" style={{ background }}>
        <div className="donut-hole">
          <strong>{total}</strong>
          <span>atividades</span>
        </div>
      </div>
      <ul className="donut-legend">
        {data.map((item) => (
          <li key={item.status}>
            <span className="legend-dot" style={{ background: statusColorVar[item.status] ?? 'var(--muted)' }} />
            {item.label}
            <strong>{item.count}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
