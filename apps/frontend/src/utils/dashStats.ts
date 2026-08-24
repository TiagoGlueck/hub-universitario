import type { Activity, ActivityCategory, ActivityStatus } from '../types/activity'
import { categoryLabels, statusLabels } from './activity'

export interface CategoryCount {
  category: ActivityCategory
  label: string
  count: number
}

export interface StatusCount {
  status: ActivityStatus
  label: string
  count: number
}

export interface dashStats {
  totalActivities: number
  totalCapacity: number
  totalRegistered: number
  totalRemainingSpots: number
  PercentOccupancy: number
  categoryCounts: CategoryCount[]
  statusCounts: StatusCount[]
  mostSoughtAfter: Activity[]
}

export function computeDashboardStats(activities: Activity[]): dashStats {
  const totalActivities = activities.length
  const totalCapacity = activities.reduce((sum, activity) => sum + activity.capacity, 0)
  const totalRegistered = activities.reduce((sum, activity) => sum + activity.registeredCount, 0)
  const totalRemainingSpots = activities.reduce((sum, activity) => sum + activity.remainingSpots, 0)
  const PercentOccupancy = totalCapacity > 0 ? (totalRegistered / totalCapacity) * 100 : 0

const categoryCounts = (Object.keys(categoryLabels) as ActivityCategory[]).map((category) => ({ category, label: categoryLabels[category], count: activities.filter((activity) => activity.category === category).length, }))

  const statusCounts = (Object.keys(statusLabels) as ActivityStatus[]).map((status) => ({ status, label: statusLabels[status], count: activities.filter((activity) => activity.status === status).length, }))

  const mostSoughtAfter = [...activities]
  .filter((activity) => activity.capacity > 0)
  .sort((a, b) => b.registeredCount / b.capacity - a.registeredCount / a.capacity)
  .slice(0, 5)


  return {
    totalActivities,
    totalCapacity,
    totalRegistered,
    totalRemainingSpots,
    PercentOccupancy,
    categoryCounts,
    statusCounts,
    mostSoughtAfter,
  }
}
