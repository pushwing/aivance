import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Bootstrap Icons name without the `bi-` prefix, e.g. "cart2". */
  icon: string;
  /** @default "outline" */
  variant?: 'solid' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  accent?: 'cura' | 'copia' | 'creo';
  /** @default "md" */
  rounded?: 'md' | 'pill';
  disabled?: boolean;
  /** Accessible label (also the tooltip). */
  label?: string;
}

/** Square/round icon-only button for toolbars, cart, wishlist, close. */
export function IconButton(props: IconButtonProps): JSX.Element;
