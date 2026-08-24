interface CategoryGraphProps { data: { label: string; count: number }[] }

export function CategoryGraph({ data }: CategoryGraphProps) {
  const max = Math.max(1, ...data.map((item) => item.count))
  return (
    <div className="bar-chart">
      {data.map((item) => (
        <div className="bar-row" key={item.label}>
          <span className="bar-label">{item.label}</span>
          <div className="bar-track">
            <span className="bar-fill" style={{ width: `${(item.count / max) * 100}%` }} />
          </div>
          <span className="bar-value">{item.count}</span>
        </div>
      ))}
    </div>
  )
}
