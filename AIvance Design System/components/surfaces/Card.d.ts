import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover (for clickable cards). */
  interactive?: boolean;
  /** Colored top accent bar for a product hue. */
  accent?: 'cura' | 'copia' | 'creo';
  /** Optional header slot (bordered). */
  header?: React.ReactNode;
  /** Optional footer slot (sunken). */
  footer?: React.ReactNode;
}

/**
 * The base surface container — soft slate shadow, 12px radius, optional hover lift.
 * @startingPoint section="Surfaces" subtitle="Base card with header/footer & accent" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
