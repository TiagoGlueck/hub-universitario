import { Link } from 'react-router-dom'
import type { Activity } from '../types/activity'
import { categoryLabels } from '../utils/activity'

interface TopListProps { activities: Activity[] }

export function TopList({ activities }: TopListProps) {
  if (activities.length === 0) { return <p className="chart-empty">Nenhuma atividade com inscrições ainda.</p> }
  return (
    <ul className="occupancy-list">
      {activities.map((activity) => {
        const occupancy = Math.min((activity.registeredCount / activity.capacity) * 100, 100)
        return (
          <li key={activity.id}>
            <Link to={`/activities/${activity.id}`}>
              <div className="occupancy-row-top">
                <span className="occupancy-title">{activity.title}</span>
                <span className="occupancy-percent">{Math.round(occupancy)}%</span>
              </div>
              <div className="progress">
                <span style={{ width: `${occupancy}%` }} />
              </div>
              <span className="occupancy-meta"> {categoryLabels[activity.category]} · {activity.registeredCount}/{activity.capacity} inscritos </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
