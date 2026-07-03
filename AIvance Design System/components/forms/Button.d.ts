import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'outline' | 'ghost' | 'subtle' | 'dark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Swap the brand blue for a product accent hue. */
  accent?: 'cura' | 'copia' | 'creo';
  /** Fully rounded (pill) — used for category chips & marketing CTAs. */
  pill?: boolean;
  /** Full-width block button. */
  block?: boolean;
  disabled?: boolean;
  /** Bootstrap Icons name (without the `bi-` prefix), rendered before the label. */
  iconLeft?: string;
  /** Bootstrap Icons name, rendered after the label. */
  iconRight?: string;
}

/**
 * The primary action control for AIvance surfaces.
 * @startingPoint section="Forms" subtitle="Buttons in every variant, size and product accent" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
