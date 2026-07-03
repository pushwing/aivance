/* @ds-bundle: {"format":4,"namespace":"AIvanceDesignSystem_2cbb92","components":[{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/commerce/PriceTag.jsx":"e34d090f949d","components/commerce/ProductCard.jsx":"083803c7f83c","components/feedback/Alert.jsx":"2927129dd1f5","components/feedback/Badge.jsx":"d11c43e28407","components/feedback/Tag.jsx":"2e1cef3204f5","components/forms/Button.jsx":"268044c8f118","components/forms/Checkbox.jsx":"9b5039db9817","components/forms/IconButton.jsx":"2518482d3115","components/forms/Input.jsx":"ca187dacb348","components/forms/Select.jsx":"0789704bd937","components/surfaces/Card.jsx":"8e161708cf38","components/surfaces/StatCard.jsx":"3d8f2a297764","ui_kits/aicopia/app.jsx":"62f6e480036d","ui_kits/aicreo/app.jsx":"770816e58737","ui_kits/aicura/app.jsx":"a33dca86c8c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AIvanceDesignSystem_2cbb92 = window.AIvanceDesignSystem_2cbb92 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const won = n => new Intl.NumberFormat('ko-KR').format(n) + '원';

/** Price display with optional strikethrough original + discount rate. */
function PriceTag({
  price,
  discountPrice = null,
  size = 'md',
  showRate = false,
  style,
  ...rest
}) {
  const has = discountPrice != null;
  const display = has ? discountPrice : price;
  const rate = has && price ? Math.round((1 - discountPrice / price) * 100) : 0;
  const fs = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-lg)',
    lg: 'var(--fs-h3)'
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '.4rem',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), has && showRate && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-500)',
      fontWeight: 'var(--fw-bold)',
      fontSize: fs
    }
  }, rate, "%"), has && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      textDecoration: 'line-through',
      fontSize: 'var(--fs-sm)'
    }
  }, won(price)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: has ? 'var(--danger-500)' : 'var(--text-strong)',
      fontWeight: 'var(--fw-bold)',
      fontSize: fs
    }
  }, won(display)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Product grid card — faithful recreation of AICopia's .product-card
 *  (1:1 image, category, truncated name, price, discount/sold-out/pick badges, hover shadow). */
function ProductCard({
  name,
  category,
  price,
  discountPrice = null,
  image,
  soldOut = false,
  badge,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const rate = discountPrice != null && price ? Math.round((1 - discountPrice / price) * 100) : 0;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: 'var(--surface-sunken)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-subtle)',
      fontSize: '2rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-image"
  })), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: 'var(--ink)',
      color: '#fff',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      padding: '.2em .55em',
      borderRadius: 'var(--radius-xs)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, badge), discountPrice != null && !soldOut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'var(--danger-500)',
      color: '#fff',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      padding: '.2em .5em',
      borderRadius: 'var(--radius-xs)'
    }
  }, rate, "%"), soldOut && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,.42)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      padding: '.3em .8em',
      borderRadius: 'var(--radius-xs)'
    }
  }, "\uD488\uC808"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3)'
    }
  }, category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      marginBottom: '.2rem'
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '.35rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    discountPrice: discountPrice,
    size: "sm"
  })))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dismissible alert. Mirrors the product's success/warning/danger session flashes. */
function Alert({
  children,
  tone = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  style,
  ...rest
}) {
  const tones = {
    info: ['var(--info-100)', 'var(--info-700)', 'var(--info-500)', 'info-circle-fill'],
    success: ['var(--success-100)', 'var(--success-700)', 'var(--success-500)', 'check-circle-fill'],
    warning: ['var(--warning-100)', 'var(--warning-700)', 'var(--warning-500)', 'exclamation-triangle-fill'],
    danger: ['var(--danger-100)', 'var(--danger-700)', 'var(--danger-500)', 'x-circle-fill'],
    brand: ['var(--brand-subtle)', 'var(--brand-active)', 'var(--brand)', 'stars']
  };
  const [bg, fg, accent, defIcon] = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '.7rem',
      padding: '.85rem 1rem',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${accent}`,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-snug)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon || defIcon}`,
    "aria-hidden": "true",
    style: {
      color: accent,
      fontSize: '1.05rem',
      marginTop: '.05rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      marginBottom: '.15rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", null, children)), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "\uB2EB\uAE30",
    style: {
      background: 'none',
      border: 'none',
      color: fg,
      opacity: .6,
      cursor: 'pointer',
      fontSize: '1rem',
      lineHeight: 1,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label badge. Mirrors the real product's badge system (SALE/NEW/PICK, grades). */
function Badge({
  children,
  tone = 'neutral',
  variant = 'solid',
  pill = true,
  icon,
  style,
  ...rest
}) {
  const tones = {
    brand: ['var(--brand)', 'var(--brand-subtle)', 'var(--brand-hover)'],
    neutral: ['var(--slate-600)', 'var(--slate-100)', 'var(--slate-700)'],
    ink: ['var(--ink)', 'var(--slate-200)', 'var(--slate-800)'],
    success: ['var(--success-500)', 'var(--success-100)', 'var(--success-700)'],
    warning: ['var(--warning-500)', 'var(--warning-100)', 'var(--warning-700)'],
    danger: ['var(--danger-500)', 'var(--danger-100)', 'var(--danger-700)'],
    info: ['var(--info-500)', 'var(--info-100)', 'var(--info-700)'],
    cura: ['var(--cura-500)', 'var(--cura-50)', 'var(--cura-600)'],
    copia: ['var(--copia-500)', 'var(--copia-50)', 'var(--copia-600)'],
    creo: ['var(--creo-500)', 'var(--creo-50)', 'var(--creo-600)']
  };
  const [solid, subtleBg, subtleFg] = tones[tone] || tones.neutral;
  const skin = variant === 'solid' ? {
    background: solid,
    color: '#fff'
  } : variant === 'soft' ? {
    background: subtleBg,
    color: subtleFg
  } : {
    background: 'transparent',
    color: solid,
    border: `1px solid ${solid}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.3rem',
      padding: '.2em .6em',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.4,
      letterSpacing: 'var(--ls-wide)',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...skin,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded-pill chip — category filters, tags, removable selections. */
function Tag({
  children,
  active = false,
  accent,
  removable = false,
  onRemove,
  icon,
  as = 'span',
  style,
  ...rest
}) {
  const color = accent ? {
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)'
  }[accent] : 'var(--brand)';
  const [hover, setHover] = React.useState(false);
  const El = as;
  const skin = active ? {
    background: color,
    color: '#fff',
    borderColor: color
  } : {
    background: '#fff',
    color: 'var(--text-body)',
    borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)'
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.35rem',
      padding: '.3rem .85rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      cursor: as === 'button' || as === 'a' ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-base)',
      textDecoration: 'none',
      ...skin,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`,
    "aria-hidden": "true"
  }), children, removable && /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x",
    "aria-hidden": "true",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      marginRight: '-.2rem',
      opacity: .7,
      cursor: 'pointer'
    }
  }));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AIvance Button — the primary action primitive.
 * Variants map to the real Bootstrap-based product (solid brand, outline, ghost, subtle)
 * plus per-product accent theming.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  accent,
  // 'cura' | 'copia' | 'creo' — overrides brand hue
  pill = false,
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const accentColor = accent ? {
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)'
  }[accent] : 'var(--brand)';
  const accentHover = accent ? {
    cura: 'var(--cura-600)',
    copia: 'var(--copia-600)',
    creo: 'var(--creo-600)'
  }[accent] : 'var(--brand-hover)';
  const sizes = {
    sm: {
      padding: '.35rem .8rem',
      font: 'var(--fs-sm)',
      gap: '.35rem'
    },
    md: {
      padding: '.55rem 1.15rem',
      font: 'var(--fs-base)',
      gap: '.5rem'
    },
    lg: {
      padding: '.8rem 1.6rem',
      font: 'var(--fs-lg)',
      gap: '.55rem'
    }
  }[size];
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    padding: sizes.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes.font,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1.2,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'background var(--dur-base), color var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: accentColor,
      color: '#fff',
      borderColor: accentColor
    },
    outline: {
      background: 'transparent',
      color: accentColor,
      borderColor: 'currentColor'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'transparent'
    },
    subtle: {
      background: 'var(--brand-subtle)',
      color: accentHover,
      borderColor: 'transparent'
    },
    dark: {
      background: 'var(--ink)',
      color: '#fff',
      borderColor: 'var(--ink)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: accentHover,
    borderColor: accentHover
  } : variant === 'outline' ? {
    background: accentColor,
    color: '#fff'
  } : variant === 'ghost' ? {
    background: 'var(--surface-hover)'
  } : variant === 'dark' ? {
    background: 'var(--slate-800)'
  } : {
    background: 'var(--aiv-blue-100)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${iconLeft}`,
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${iconRight}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Also renders a radio when type="radio". */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  type = 'checkbox',
  accent,
  style,
  ...rest
}) {
  const color = accent ? {
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)'
  }[accent] : 'var(--brand)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.5rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: 17,
      height: 17,
      accentColor: color,
      cursor: 'inherit',
      margin: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only button — toolbar, cart, wishlist, close. Uses Bootstrap Icons. */
function IconButton({
  icon,
  variant = 'outline',
  size = 'md',
  accent,
  rounded = 'md',
  disabled = false,
  label,
  style,
  ...rest
}) {
  const accentColor = accent ? {
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)'
  }[accent] : 'var(--brand)';
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const fs = {
    sm: '.9rem',
    md: '1.05rem',
    lg: '1.25rem'
  }[size];
  const [hover, setHover] = React.useState(false);
  const variants = {
    solid: {
      background: accentColor,
      color: '#fff',
      borderColor: accentColor
    },
    outline: {
      background: '#fff',
      color: 'var(--text-body)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      borderColor: 'transparent'
    }
  };
  const hoverStyle = !disabled && hover ? variant === 'solid' ? {
    filter: 'brightness(.93)'
  } : {
    background: 'var(--surface-hover)',
    color: accentColor,
    borderColor: 'var(--border-strong)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fs,
      border: '1px solid transparent',
      borderRadius: rounded === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      transition: 'all var(--dur-base)',
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, optional leading icon, and validation state. */
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const pad = {
    sm: '.4rem .7rem',
    md: '.6rem .85rem',
    lg: '.75rem 1rem'
  }[size];
  const fs = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-base)',
    lg: 'var(--fs-lg)'
  }[size];
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.35rem',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '.8rem',
      color: 'var(--text-subtle)',
      fontSize: '1rem',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: pad,
      paddingLeft: icon ? '2.4rem' : undefined,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--text-strong)',
      background: '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : error ? '0 0 0 3px var(--danger-100)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match AIvance inputs. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  options = [],
  id,
  children,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const selId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const pad = {
    sm: '.4rem .7rem',
    md: '.6rem .85rem',
    lg: '.75rem 1rem'
  }[size];
  const fs = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-base)',
    lg: 'var(--fs-lg)'
  }[size];
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.35rem',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: pad,
      paddingRight: '2.2rem',
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--text-strong)',
      background: '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest), children || options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '.85rem',
      color: 'var(--text-subtle)',
      fontSize: '.8rem',
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface card — the base container (.card, radius .75rem, soft shadow, hover lift). */
function Card({
  children,
  padding = 'md',
  interactive = false,
  accent,
  header,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[padding];
  const accentBar = accent ? {
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)'
  }[accent] : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: interactive && hover ? 'var(--lift)' : 'none',
      transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
      borderTop: accentBar ? `3px solid ${accentBar}` : undefined,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      color: 'var(--text-body)',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dashboard metric widget (admin dashboards: 매출·주문·회원·방문자). */
function StatCard({
  label,
  value,
  unit,
  icon,
  delta,
  tone = 'brand',
  style,
  ...rest
}) {
  const toneColor = {
    brand: 'var(--brand)',
    cura: 'var(--cura-500)',
    copia: 'var(--copia-500)',
    creo: 'var(--creo-500)',
    success: 'var(--success-500)',
    warning: 'var(--warning-500)',
    info: 'var(--info-500)'
  }[tone] || 'var(--brand)';
  const toneBg = {
    brand: 'var(--brand-subtle)',
    cura: 'var(--cura-50)',
    copia: 'var(--copia-50)',
    creo: 'var(--creo-50)',
    success: 'var(--success-100)',
    warning: 'var(--warning-100)',
    info: 'var(--info-100)'
  }[tone] || 'var(--brand-subtle)';
  const up = delta != null && delta >= 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.6rem',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: toneBg,
      color: toneColor,
      borderRadius: 'var(--radius-sm)',
      fontSize: '1rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '.25rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.25rem',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: up ? 'var(--success-700)' : 'var(--danger-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-arrow-${up ? 'up' : 'down'}-right`,
    "aria-hidden": "true"
  }), Math.abs(delta), "% ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: 'var(--fw-regular)'
    }
  }, "\uC804\uC77C \uB300\uBE44")));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aicopia/app.jsx
try { (() => {
const {
  useState
} = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  ProductCard,
  PriceTag,
  Input,
  Alert
} = NS;
const img = s => `https://images.unsplash.com/${s}?w=600&h=600&fit=crop`;
const Mark = ({
  c = 'var(--copia-500)',
  a = 'var(--copia-600)',
  s = 26
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 64 64",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 46 L30 30 L44 40 L58 20",
  stroke: c,
  strokeWidth: "7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "46",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "30",
  cy: "30",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "40",
  r: "6",
  fill: a
}), /*#__PURE__*/React.createElement("circle", {
  cx: "58",
  cy: "20",
  r: "6",
  fill: a
}));
const PRODUCTS = [{
  id: 1,
  name: '베이직 코튼 티셔츠',
  category: '상의',
  price: 29000,
  discountPrice: 19900,
  badge: 'NEW',
  image: img('photo-1521572163474-6864f9cf17ab')
}, {
  id: 2,
  name: '오버핏 데님 자켓',
  category: '아우터',
  price: 89000,
  image: img('photo-1544022613-e87ca75a784a')
}, {
  id: 3,
  name: '소프트 니트 가디건',
  category: '상의',
  price: 54000,
  discountPrice: 43200,
  image: img('photo-1434389677669-e08b4cac3105')
}, {
  id: 4,
  name: '클래식 치노 팬츠',
  category: '하의',
  price: 49000,
  discountPrice: 34300,
  badge: 'PICK',
  image: img('photo-1473966968600-fa801b869a1a')
}, {
  id: 5,
  name: '캔버스 스니커즈',
  category: '신발',
  price: 69000,
  soldOut: true,
  image: img('photo-1460353581641-37baddab0fa2')
}, {
  id: 6,
  name: '미니멀 크로스백',
  category: '가방',
  price: 79000,
  discountPrice: 55300,
  image: img('photo-1548036328-c9fa89d128fa')
}, {
  id: 7,
  name: '울 블렌드 코트',
  category: '아우터',
  price: 159000,
  badge: 'NEW',
  image: img('photo-1539533018447-63fcce2678e3')
}, {
  id: 8,
  name: '라운드넥 스웨트셔츠',
  category: '상의',
  price: 39000,
  discountPrice: 31200,
  image: img('photo-1556821840-3a63f95609a7')
}];
const CATS = ['전체', '아우터', '상의', '하의', '신발', '가방'];
function Navbar({
  cartCount,
  onCart,
  onHome
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 64,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--copia-500)'
    }
  }, "AI"), "Copia")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      fontSize: 14,
      fontWeight: 500,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, "\uC804\uCCB4\uC0C1\uD488"), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer'
    }
  }, "\uAE30\uD68D\uC804"), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer'
    }
  }, "\uACF5\uC9C0\uC0AC\uD56D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 210,
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "\uAC80\uC0C9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "cart2",
    label: "\uC7A5\uBC14\uAD6C\uB2C8",
    onClick: onCart,
    accent: "copia",
    variant: "outline"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      right: -5,
      background: 'var(--danger-500)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      minWidth: 17,
      height: 17,
      borderRadius: '999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, cartCount)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "person"
  }, "\uB85C\uADF8\uC778"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#4c1d95 0%,#6d28d9 55%,#7c3aed 100%)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '56px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "copia",
    variant: "soft",
    icon: "stars"
  }, "AI \uAC1C\uC778\uD654 \uCD94\uCC9C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      letterSpacing: '-.02em',
      margin: '16px 0 10px',
      lineHeight: 1.15
    }
  }, "\uCDE8\uD5A5\uC744 \uC544\uB294 \uC1FC\uD551,", /*#__PURE__*/React.createElement("br", null), "\uC6B4\uC601\uC740 AI\uAC00 \uB300\uC2E0\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'rgba(255,255,255,.82)',
      margin: '0 0 22px',
      maxWidth: 440
    }
  }, "\uC0C1\uD488 \uB4F1\uB85D\uBD80\uD130 \uBB38\uC758 \uC751\uB300\uAE4C\uC9C0 \u2014 \uBC18\uBCF5 \uC5C5\uBB34\uB294 AICopia\uAC00 \uCC98\uB9AC\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    iconRight: "arrow-right",
    style: {
      background: '#fff',
      color: 'var(--copia-600)',
      borderColor: '#fff'
    }
  }, "\uC1FC\uD551 \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.5)'
    }
  }, "\uAE30\uD68D\uC804 \uBCF4\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 300px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, PRODUCTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      aspectRatio: '1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))));
}
function Section({
  tag,
  tagTone,
  title,
  items,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '44px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tagTone
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, title)), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\uC804\uCCB4\uBCF4\uAE30 ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => !p.soldOut && onOpen(p),
    style: {
      cursor: p.soldOut ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, p))))));
}
function Home({
  onOpen
}) {
  const [cat, setCat] = useState('전체');
  const list = cat === '전체' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      gap: 8,
      padding: '16px 24px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    as: "button",
    accent: "copia",
    active: c === cat,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement(Section, {
    tag: "PICK",
    tagTone: "danger",
    title: "\uAE30\uD68D\uC804 \uCD94\uCC9C",
    items: list.slice(0, 4),
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    tag: "NEW",
    tagTone: "ink",
    title: "\uC2E0\uC0C1\uD488",
    items: list.slice(0, 4),
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement(Section, {
    tag: "SALE",
    tagTone: "danger",
    title: "\uD560\uC778 \uC0C1\uD488",
    items: list.filter(p => p.discountPrice).slice(0, 4),
    onOpen: onOpen
  }));
}
function Detail({
  p,
  onBack,
  onAdd
}) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-left"
  }), " \uBAA9\uB85D\uC73C\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 460px',
      aspectRatio: '1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "copia",
    variant: "soft"
  }, p.category), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, p.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 14px',
      letterSpacing: '-.01em'
    }
  }, p.name), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    discountPrice: p.discountPrice,
    showRate: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      margin: '22px 0',
      paddingTop: 20,
      display: 'grid',
      gap: 12,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "\uBC30\uC1A1",
    v: "\uBB34\uB8CC\uBC30\uC1A1 \xB7 1~2\uC77C \uB0B4 \uCD9C\uACE0"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "\uC801\uB9BD",
    v: "\uAD6C\uB9E4 \uC2DC 1% \uD3EC\uC778\uD2B8 \uC801\uB9BD"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "\uC7AC\uACE0",
    v: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--success-700)'
      }
    }, "\uC7AC\uACE0 \uC788\uC74C")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, "\uC218\uB7C9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "dash",
    variant: "ghost",
    size: "sm",
    label: "\uAC10\uC18C",
    onClick: () => setQty(q => Math.max(1, q - 1))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      textAlign: 'center',
      fontWeight: 600
    }
  }, qty), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    variant: "ghost",
    size: "sm",
    label: "\uC99D\uAC00",
    onClick: () => setQty(q => q + 1)
  }))), added && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success"
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    accent: "copia",
    size: "lg",
    block: true,
    iconLeft: "cart-plus",
    onClick: () => {
      onAdd(qty);
      setAdded(true);
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    size: "lg",
    variant: "outline",
    accent: "creo",
    label: "\uCC1C"
  })))));
}
const Row = ({
  k,
  v
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 60,
    color: 'var(--text-muted)'
  }
}, k), /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--text-body)'
  }
}, v));
function CartDrawer({
  open,
  items,
  onClose
}) {
  const total = items.reduce((s, i) => s + (i.discountPrice || i.price) * i.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,.4)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .2s',
      zIndex: 60
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 380,
      background: '#fff',
      boxShadow: 'var(--shadow-xl)',
      transform: `translateX(${open ? 0 : 100}%)`,
      transition: 'transform .28s cubic-bezier(.16,1,.3,1)',
      zIndex: 70,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--copia-500)'
    }
  }, items.length)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x-lg",
    variant: "ghost",
    label: "\uB2EB\uAE30",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--text-subtle)',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart-x",
    style: {
      fontSize: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 14
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4")), items.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.image,
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-sm)',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\uC218\uB7C9 ", i.qty), /*#__PURE__*/React.createElement(PriceTag, {
    price: (i.discountPrice || i.price) * i.qty,
    size: "sm"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, "\uACB0\uC81C \uC608\uC0C1\uAE08\uC561"), /*#__PURE__*/React.createElement(PriceTag, {
    price: total,
    size: "md"
  })), /*#__PURE__*/React.createElement(Button, {
    accent: "copia",
    size: "lg",
    block: true,
    disabled: items.length === 0
  }, "\uC8FC\uBB38\uD558\uAE30"))));
}
function App() {
  const [view, setView] = useState({
    name: 'home'
  });
  const [cart, setCart] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const addToCart = (p, qty) => setCart(c => [...c, {
    ...p,
    qty
  }]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    cartCount: cart.length,
    onCart: () => setDrawer(true),
    onHome: () => setView({
      name: 'home'
    })
  }), view.name === 'home' ? /*#__PURE__*/React.createElement(Home, {
    onOpen: p => {
      setView({
        name: 'detail',
        p
      });
      window.scrollTo(0, 0);
    }
  }) : /*#__PURE__*/React.createElement(Detail, {
    p: view.p,
    onBack: () => setView({
      name: 'home'
    }),
    onAdd: qty => addToCart(view.p, qty)
  }), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '32px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--slate-400)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    c: "#fff",
    a: "#fff",
    s: 20
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--copia-500)'
    }
  }, "AI"), "Copia"), " \u2014 AI \uCEE4\uBA38\uC2A4 \uC194\uB8E8\uC158")), /*#__PURE__*/React.createElement("div", null, "\xA9 2026 AIvance. All rights reserved."))), /*#__PURE__*/React.createElement(CartDrawer, {
    open: drawer,
    items: cart,
    onClose: () => setDrawer(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aicopia/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aicreo/app.jsx
try { (() => {
const {
  useState
} = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const {
  Button,
  Badge,
  Tag,
  Card,
  Input,
  Alert
} = NS;
const Mark = ({
  c = 'var(--creo-500)',
  a = 'var(--creo-600)',
  s = 26
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 64 64",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 46 L30 30 L44 40 L58 20",
  stroke: c,
  strokeWidth: "7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "46",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "30",
  cy: "30",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "40",
  r: "6",
  fill: a
}), /*#__PURE__*/React.createElement("circle", {
  cx: "58",
  cy: "20",
  r: "6",
  fill: a
}));
const SERVICES = [{
  icon: 'window-stack',
  title: '동적 페이지 · CMS',
  desc: '슬러그 기반 자동 라우팅과 위지윅 에디터로 콘텐츠를 직접 관리합니다.'
}, {
  icon: 'chat-square-text',
  title: '게시판 · 문의',
  desc: '다중 게시판, 비회원 게시, 파일 첨부, 문의 자동 이메일 발송.'
}, {
  icon: 'palette',
  title: '테마 시스템',
  desc: 'ZIP 업로드로 테마 설치, 클릭 한 번으로 디자인 전환.'
}, {
  icon: 'search',
  title: 'SEO 자동화',
  desc: 'OG 태그·메타 설명·GA·네이버 웹마스터 자동 삽입.'
}];
const NOTICES = [{
  tag: '공지',
  title: 'AICreo 2.0 — 테마 마켓플레이스 오픈',
  date: '2026.06.28'
}, {
  tag: '업데이트',
  title: '좌측 배너 사이드바 레이아웃(spring) 추가',
  date: '2026.06.14'
}, {
  tag: '가이드',
  title: '신규 클라이언트 3일 납품 워크플로우',
  date: '2026.06.09'
}];
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(8px)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 64,
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--creo-500)'
    }
  }, "AI"), "Creo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("a", null, "\uD68C\uC0AC\uC18C\uAC1C"), /*#__PURE__*/React.createElement("a", null, "\uC11C\uBE44\uC2A4"), /*#__PURE__*/React.createElement("a", null, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624"), /*#__PURE__*/React.createElement("a", null, "\uACF5\uC9C0\uC0AC\uD56D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--creo-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-telephone"
  }), " 1600-0000"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    accent: "creo",
    iconRight: "arrow-right"
  }, "\uBB38\uC758\uD558\uAE30"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(120deg,#fff 0%,#fef0f5 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '84px 24px 76px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "creo",
    variant: "soft",
    icon: "lightning-charge"
  }, "3~5\uC77C \uBE60\uB978 \uB0A9\uD488"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)',
      margin: '18px 0 16px',
      lineHeight: 1.1
    }
  }, "\uAE30\uC5C5 \uD648\uD398\uC774\uC9C0,", /*#__PURE__*/React.createElement("br", null), "\uCF54\uC5B4\uB294 \uC7AC\uC0AC\uC6A9\uD558\uACE0 \uB514\uC790\uC778\uB9CC \uAD50\uCCB4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-muted)',
      maxWidth: 520,
      margin: '0 auto 28px'
    }
  }, "\uAC80\uC99D\uB41C CodeIgniter 4 \uCF54\uC5B4 \uC704\uC5D0 \uD14C\uB9C8\uB9CC \uAC08\uC544\uB07C\uC6CC \uB2E8\uC21C \uD648\uD398\uC774\uC9C0\uB294 3~5\uC77C, \uC911\uD615 \uC0AC\uC774\uD2B8\uB294 1~2\uC8FC \uC548\uC5D0 \uB0A9\uD488\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    accent: "creo",
    size: "lg",
    iconRight: "arrow-right"
  }, "\uB370\uBAA8 \uC0AC\uC774\uD2B8 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    accent: "creo"
  }, "\uD14C\uB9C8 \uB458\uB7EC\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      justifyContent: 'center',
      marginTop: 44
    }
  }, [['150+', '납품 사이트'], ['3일', '평균 납품'], ['MIT', '오픈소스 코어']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l))))));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--creo-500)',
      fontWeight: 700
    }
  }, "What we build"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '8px 0 0'
    }
  }, "\uB0A9\uD488\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uAE30\uB2A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--creo-50)',
      color: 'var(--creo-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${s.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, s.desc))))));
}
function Notice() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 240px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\uACF5\uC9C0\uC0AC\uD56D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "\uC81C\uD488 \uC5C5\uB370\uC774\uD2B8\uC640 \uB0A9\uD488 \uC18C\uC2DD\uC744 \uC804\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--creo-600)',
      cursor: 'pointer'
    }
  }, "\uC804\uCCB4\uBCF4\uAE30 ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, NOTICES.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 4px',
      borderBottom: '1px solid var(--border-subtle)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: n.tag === '공지' ? 'creo' : 'neutral',
    variant: "soft"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, n.date))))));
}
function CTA() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      borderRadius: 'var(--radius-xl)',
      padding: '52px 48px',
      display: 'flex',
      gap: 48,
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      margin: '0 0 12px'
    }
  }, "\uD648\uD398\uC774\uC9C0\uAC00 \uD544\uC694\uD558\uC2E0\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-400)',
      fontSize: 15,
      margin: 0,
      lineHeight: 1.6
    }
  }, "\uC5F0\uB77D\uCC98\uB97C \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uC601\uC5C5\uC77C \uAE30\uC900 1\uC77C \uB0B4 \uACAC\uC801\uACFC \uB370\uBAA8\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 340px'
    }
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "\uC811\uC218 \uC644\uB8CC"
  }, "\uB2F4\uB2F9\uC790\uAC00 \uACE7 \uC5F0\uB77D\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uD68C\uC0AC\uBA85 / \uB2F4\uB2F9\uC790",
    icon: "building"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC5F0\uB77D\uCC98",
    icon: "telephone"
  }), /*#__PURE__*/React.createElement(Button, {
    accent: "creo",
    size: "lg",
    block: true,
    onClick: () => setSent(true)
  }, "\uBB34\uB8CC \uACAC\uC801 \uBC1B\uAE30"))))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Notice, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '28px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    s: 18
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--creo-500)'
    }
  }, "AI"), "Creo"), " \xB7 AIvance \uC81C\uD488\uAD70")), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AIvance. CodeIgniter 4 \xB7 Bootstrap 5"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aicreo/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aicura/app.jsx
try { (() => {
const {
  useState
} = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  StatCard,
  Alert,
  Select
} = NS;
const Mark = ({
  c = 'var(--cura-500)',
  a = '#fff',
  s = 26
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 64 64",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 46 L30 30 L44 40 L58 20",
  stroke: c,
  strokeWidth: "7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "46",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "30",
  cy: "30",
  r: "6",
  fill: c
}), /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "40",
  r: "6",
  fill: a
}), /*#__PURE__*/React.createElement("circle", {
  cx: "58",
  cy: "20",
  r: "6",
  fill: a
}));
const NAV = [['speedometer2', '대시보드', true], ['file-earmark-text', 'AI 리포트'], ['building', '병원 관리'], ['bar-chart', '캠페인'], ['people', '앱 로그'], ['phone', '앱 (iOS·Android)'], ['gear', '설정']];
const HOSPITALS = [{
  name: '서울라인 성형외과',
  spend: 82,
  budget: 100,
  status: '정상'
}, {
  name: '뷰티풀 의원',
  spend: 94,
  budget: 100,
  status: '소진임박'
}, {
  name: '그레이스 피부과',
  spend: 41,
  budget: 100,
  status: '정상'
}, {
  name: '미소 성형외과',
  spend: 100,
  budget: 100,
  status: '소진완료'
}];
const BARS = [42, 55, 48, 63, 71, 66, 84];
const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
function Sidebar() {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 230,
      flex: 'none',
      background: 'var(--ink)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.02em',
      padding: '4px 10px 22px'
    }
  }, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cura-500)'
    }
  }, "AI"), "Cura")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(([ic, label, active]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      background: active ? 'var(--cura-600)' : 'transparent',
      color: active ? '#fff' : 'var(--slate-400)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${ic}`,
    style: {
      fontSize: 16
    }
  }), label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '12px',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,.06)',
      fontSize: 12,
      color: 'var(--slate-400)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 600,
      marginBottom: 2
    }
  }, "\uC6B4\uC601\uC790 \uC2A4\uCF54\uD504"), "\uC804\uCCB4 \uBCD1\uC6D0 \uD569\uC0B0 \uB9AC\uD3EC\uD2B8"));
}
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 26px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, "2026\uB144 7\uC6D4 3\uC77C \xB7 AI \uC77C\uC77C \uB9AC\uD3EC\uD2B8 \uC790\uB3D9 \uC0DD\uC131\uB428")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['운영자(전체)', '광고주(내 병원)', '대행사(소속 병원)']
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "\uC54C\uB9BC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '999px',
      background: 'var(--cura-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 13
    }
  }, "\uC6B4")));
}
function Chart() {
  const max = Math.max(...BARS);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "\uC8FC\uAC04 \uB9E4\uCD9C \uCD94\uC774"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "soft",
    icon: "arrow-up-right"
  }, "+18%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height: 150
    }
  }, BARS.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v / max * 130}px`,
      borderRadius: '6px 6px 0 0',
      background: i === BARS.length - 1 ? 'var(--cura-500)' : 'var(--cura-50)',
      border: i === BARS.length - 1 ? 'none' : '1px solid var(--cura-500)',
      transition: 'height .4s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, DAYS[i])))));
}
function Hospitals() {
  const tone = {
    정상: 'success',
    '소진임박': 'warning',
    '소진완료': 'danger'
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "\uBCD1\uC6D0\uBCC4 \uAD11\uACE0\uBE44 \uC18C\uC9C4"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      color: 'var(--cura-600)',
      cursor: 'pointer'
    }
  }, "\uC804\uCCB4\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 0'
    }
  }, HOSPITALS.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--slate-100)',
      borderRadius: '999px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${h.spend}%`,
      height: '100%',
      background: h.spend >= 100 ? 'var(--danger-500)' : h.spend >= 90 ? 'var(--warning-500)' : 'var(--cura-500)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 44,
      textAlign: 'right'
    }
  }, h.spend, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone[h.status],
    variant: "soft"
  }, h.status))))));
}
function Report() {
  return /*#__PURE__*/React.createElement(Card, {
    accent: "cura",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cura-50)',
      color: 'var(--cura-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "AI \uC77C\uC77C \uB9AC\uD3EC\uD2B8"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cura",
    variant: "soft",
    style: {
      marginLeft: 'auto'
    }
  }, "Groq")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 12px'
    }
  }, "\uC624\uB298 \uC804\uCCB4 \uB9E4\uCD9C\uC740 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "\u20A93,240\uB9CC"), "\uC73C\uB85C \uC804\uC77C \uB300\uBE44 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--success-700)'
    }
  }, "18% \uC99D\uAC00"), "\uD588\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--warning-700)'
    }
  }, " \uBDF0\uD2F0\uD480 \uC758\uC6D0"), "\uC758 \uAD11\uACE0\uBE44\uAC00 94% \uC18C\uC9C4\uB418\uC5B4 \uC7AC\uCDA9\uC804\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC0C1\uB2F4 \uC2E0\uCCAD \uC804\uD658\uC728\uC740 \uC8FC\uB9D0 \uB300\uBE44 12%p \uC0C1\uC2B9\uD588\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    accent: "cura",
    size: "sm",
    iconRight: "arrow-right"
  }, "\uC804\uCCB4 \uB9AC\uD3EC\uD2B8"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "download"
  }, "PDF")));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\uC624\uB298 \uB9E4\uCD9C",
    value: "\u20A932.4M",
    tone: "cura",
    icon: "graph-up-arrow",
    delta: 18
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\uC0C1\uB2F4 \uC2E0\uCCAD",
    value: 156,
    unit: "\uAC74",
    tone: "cura",
    icon: "chat-dots",
    delta: 12
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\uC9D1\uD589 \uBCD1\uC6D0",
    value: 24,
    unit: "\uACF3",
    tone: "brand",
    icon: "building"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\uC18C\uC9C4 \uC784\uBC15",
    value: 3,
    unit: "\uACF3",
    tone: "warning",
    icon: "exclamation-triangle",
    delta: -2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Chart, null), /*#__PURE__*/React.createElement(Report, null)), /*#__PURE__*/React.createElement(Hospitals, null))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aicura/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
