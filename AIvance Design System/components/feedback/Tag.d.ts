import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Selected/filled state. */
  active?: boolean;
  accent?: 'cura' | 'copia' | 'creo';
  /** Show a removable ✕. */
  removable?: boolean;
  onRemove?: () => void;
  icon?: string;
  /** Render element. @default "span" */
  as?: 'span' | 'button' | 'a';
}

/** Pill chip for category filters and tags (real product's rounded-pill category buttons). */
export function Tag(props: TagProps): JSX.Element;
