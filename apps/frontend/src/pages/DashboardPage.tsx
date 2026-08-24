import { useMemo } from 'react'
import { useActivities } from '../hooks/useActivities'
import { computeDashboardStats } from '../utils/dashStats'
import { StatCard,StatusDonutChart } from '../components/StatCard'
import { CategoryGraph } from '../components/CategoryGraph'
import { TopList } from '../components/TopList'

export function DashboardPage() {
  const activitiesQuery = useActivities('')
  const stats = useMemo(
    () => computeDashboardStats(activitiesQuery.data ?? []),
    [activitiesQuery.data],
  )
  if (activitiesQuery.isLoading) {
    return (
      <main className="page-shell dashboard-page">
        <p className="eyebrow">Visão geral</p>
        <h1>Dashboard</h1>
        <div className="state-card">Carregando indicadores...</div>
      </main>
    )
  }
  if (activitiesQuery.isError) {
    return (
      <main className="page-shell dashboard-page">
        <p className="eyebrow">Visão geral</p>
        <h1>Dashboard</h1>
        <div className="state-card error-state">
          <h3>Não foi possível carregar os indicadores</h3>
          <p>Verifique se a API está em execução e tente novamente.</p>
          <button type="button" onClick={() => activitiesQuery.refetch()}>Tentar novamente</button>
        </div>
      </main>
    )
  }
  if (stats.totalActivities === 0) {
    return (
      <main className="page-shell dashboard-page">
        <p className="eyebrow">Visão geral</p>
        <h1>Dashboard</h1>
        <div className="state-card dashboard-placeholder">
          <h2>Nenhuma atividade cadastrada</h2>
          <p>Assim que atividades forem criadas, os indicadores aparecerão aqui.</p>
        </div>
      </main>
    )
  }
  return (
    <main className="page-shell dashboard-page">
      <p className="eyebrow">Visão geral</p>
      <h1>Dashboard</h1>
      <div className="stat-grid">
        <StatCard label="Atividades cadastradas" value={String(stats.totalActivities)} />
        <StatCard label="Inscrições totais" value={String(stats.totalRegistered)} />
        <StatCard label="Vagas disponíveis" value={String(stats.totalRemainingSpots)} />
        <StatCard label="Ocupação média" value={`${Math.round(stats.PercentOccupancy)}%`} />
      </div>
      <div className="dashboard-grid">
        <section className="chart-card">
          <h2>Atividades por categoria</h2>
          <CategoryGraph data={stats.categoryCounts} />
        </section>
        <section className="chart-card">
          <h2>Status das atividades</h2>
          <StatusDonutChart data={stats.statusCounts} />
        </section>
      </div>
	<section className="chart-card occupancy-card">
	    <h2>Mais concorridas</h2>
	    <TopList activities={stats.mostSoughtAfter} />
	</section>
    </main>
  )
}

