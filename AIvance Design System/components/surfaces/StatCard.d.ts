import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Metric name, e.g. "오늘 매출". */
  label: string;
  /** Formatted value, e.g. "₩3,240,000" or "128". */
  value: string | number;
  /** Trailing unit, e.g. "건". */
  unit?: string;
  /** Bootstrap Icons name for the corner glyph. */
  icon?: string;
  /** Percent change vs. prior period; sign drives arrow + color. */
  delta?: number;
  /** @default "brand" */
  tone?: 'brand' | 'cura' | 'copia' | 'creo' | 'success' | 'warning' | 'info';
}

/**
 * KPI widget for admin dashboards (매출·주문·회원·방문자).
 * @startingPoint section="Surfaces" subtitle="Dashboard KPI widget" viewport="360x160"
 */
export function StatCard(props: StatCardProps): JSX.Element;
