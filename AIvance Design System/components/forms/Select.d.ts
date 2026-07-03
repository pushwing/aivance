import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Convenience list; or pass <option> children directly. */
  options?: (string | SelectOption)[];
}

/** Styled native <select> matching AIvance inputs. */
export function Select(props: SelectProps): JSX.Element;
