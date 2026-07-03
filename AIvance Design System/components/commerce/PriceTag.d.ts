import React from 'react';

export interface PriceTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** List price in KRW. */
  price: number;
  /** Sale price; shows strikethrough original + red current. */
  discountPrice?: number | null;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Prefix the discount rate (e.g. "20%"). */
  showRate?: boolean;
}

/** KRW price display with discount strikethrough (formats with 원). */
export function PriceTag(props: PriceTagProps): JSX.Element;
