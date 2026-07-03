import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'brand' | 'neutral' | 'ink' | 'success' | 'warning' | 'danger' | 'info' | 'cura' | 'copia' | 'creo';
  /** @default "solid" */
  variant?: 'solid' | 'soft' | 'outline';
  /** Rounded pill vs squared. @default true */
  pill?: boolean;
  /** Leading Bootstrap Icons name. */
  icon?: string;
}

/**
 * Compact status/label chip — SALE, NEW, PICK, order status, member grade.
 * @startingPoint section="Feedback" subtitle="Badge tones & variants" viewport="700x150"
 */
export function Badge(props: BadgeProps): JSX.Element;
