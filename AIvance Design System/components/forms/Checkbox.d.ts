import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  /** Render as radio instead of checkbox. @default "checkbox" */
  type?: 'checkbox' | 'radio';
  accent?: 'cura' | 'copia' | 'creo';
}

/** Checkbox / radio with inline label, themed via accent-color. */
export function Checkbox(props: CheckboxProps): JSX.Element;
