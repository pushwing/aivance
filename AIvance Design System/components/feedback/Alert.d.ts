import React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'brand';
  /** Optional bold heading above the message. */
  title?: string;
  /** Override the default tone icon (Bootstrap Icons name). */
  icon?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

/** Inline feedback banner — session flashes, form results, notices. */
export function Alert(props: AlertProps): JSX.Element;
