import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text shown below the field. */
  hint?: string;
  /** Error message — turns the field red and overrides hint. */
  error?: string;
  /** Leading Bootstrap Icons name. */
  icon?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Labelled text input with icon slot and validation state. */
export function Input(props: InputProps): JSX.Element;
