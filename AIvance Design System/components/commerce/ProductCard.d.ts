import React from 'react';

export interface ProductCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  category?: string;
  /** List price in KRW (won). */
  price: number;
  /** Discounted price; when set, shows strikethrough + % badge. */
  discountPrice?: number | null;
  /** Product image URL. */
  image?: string;
  soldOut?: boolean;
  /** Corner ribbon text, e.g. "NEW" or "PICK". */
  badge?: string;
}

/**
 * E-commerce product grid tile — recreation of AICopia's .product-card.
 * @startingPoint section="Commerce" subtitle="Product grid tile with price & badges" viewport="240x340"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
