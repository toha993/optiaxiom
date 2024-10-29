export const colorPalette = {
  "blue.100": "#C6DBFA" as const,
  "blue.200": "#A1C2F7" as const,
  "blue.300": "#7BAAF4" as const,
  "blue.500": "#2F7AEE" as const,
  "blue.600": "#115DD4" as const,
  "blue.700": "#0D46A0" as const,
  "blue.800": "#09306D" as const,
  "blue.900": "#051939" as const,

  "brand.50": "#F0F3FF" as const,
  "brand.200": "#B3C3FF" as const,
  "brand.300": "#6A8FFC" as const,
  "brand.400": "#2E66F7" as const,
  "brand.500": "#0037FF" as const,
  "brand.600": "#002CCC" as const,
  "brand.700": "#002894" as const,
  "brand.800": "#001666" as const,
  "brand.900": "#000B33" as const,

  "cyan.100": "#CFFAFE" as const,
  "cyan.200": "#99F0F9" as const,
  "cyan.700": "#0E7490" as const,
  "cyan.900": "#083344" as const,

  "green.100": "#D1F0E1" as const,
  "green.200": "#A5E1C3" as const,
  "green.300": "#7CD2A7" as const,
  "green.400": "#5AC58A" as const,
  "green.500": "#03A65D" as const,
  "green.600": "#038047" as const,
  "green.700": "#24663E" as const,
  "green.800": "#17492B" as const,
  "green.900": "#082415" as const,

  "magenta.100": "#FAE8FF" as const,
  "magenta.200": "#F5D0FE" as const,
  "magenta.600": "#A21CAF" as const,
  "magenta.900": "#4A044E" as const,

  "neutral.00": "#FFFFFF" as const,
  "neutral.50": "#F9FAFC" as const,
  "neutral.75": "#F5F6FA" as const,
  "neutral.100": "#E9EDF5" as const,
  "neutral.150": "#DADFEB" as const,
  "neutral.200": "#CACFDC" as const,
  "neutral.300": "#B8BECB" as const,
  "neutral.500": "#868FA4" as const,
  "neutral.600": "#626A81" as const,
  "neutral.700": "#4F576E" as const,
  "neutral.800": "#2E3442" as const,
  "neutral.900": "#1C212B" as const,
  "neutral.1000": "#1C2029" as const,
  "neutral.1100": "#171A23" as const,
  "neutral.1200": "#091E42" as const,

  "neutral.50/6": "#F9FAFC0F" as const,
  "neutral.50/12": "#F9FAFC1F" as const,
  "neutral.50/18": "#F9FAFC2E" as const,
  "neutral.50/32": "#F9FAFC52" as const,

  "neutral.1200/4": "#091E420A" as const,
  "neutral.1200/8": "#091E4214" as const,
  "neutral.1200/16": "#091E4229" as const,
  "neutral.1200/32": "#091E4252" as const,

  "purple.100": "#E5DCF4" as const,
  "purple.200": "#C4B1E2" as const,
  "purple.500": "#693AB6" as const,
  "purple.700": "#412470" as const,
  "purple.900": "#261542" as const,

  "red.50": "#FFF7F7" as const,
  "red.100": "#FFD7D7" as const,
  "red.200": "#FFB4B4" as const,
  "red.300": "#FC8B8B" as const,
  "red.400": "#F64F4F" as const,
  "red.500": "#CC1616" as const,
  "red.600": "#B21313" as const,
  "red.700": "#911D1D" as const,
  "red.800": "#601313" as const,
  "red.900": "#300A0A" as const,

  "yellow.100": "#FEF1C6" as const,
  "yellow.200": "#FEDF88" as const,
  "yellow.300": "#FFC84B" as const,
  "yellow.400": "#FDB022" as const,
  "yellow.500": "#F79008" as const,
  "yellow.600": "#DC6903" as const,
  "yellow.700": "#B54707" as const,
  "yellow.800": "#7A2E0D" as const,
  "yellow.900": "#4E1D09" as const,
} as const;

export const colors = {
  ...colorPalette,

  current: "currentColor" as const,
  transparent: "transparent" as const,

  "avatar.bg.blue": colorPalette["blue.500"],
  "avatar.bg.cyan": colorPalette["cyan.100"],
  "avatar.bg.green": colorPalette["green.600"],
  "avatar.bg.magenta": colorPalette["magenta.100"],
  "avatar.bg.purple": colorPalette["purple.100"],
  "avatar.bg.yellow": colorPalette["yellow.300"],
  "avatar.fg.blue": colorPalette["neutral.00"],
  "avatar.fg.cyan": colorPalette["cyan.700"],
  "avatar.fg.green": colorPalette["neutral.00"],
  "avatar.fg.magenta": colorPalette["magenta.600"],
  "avatar.fg.purple": colorPalette["purple.700"],
  "avatar.fg.yellow": colorPalette["neutral.900"],

  "bg.accent": colorPalette["brand.500"],
  "bg.accent.hovered": colorPalette["brand.600"],
  "bg.accent.light": colorPalette["brand.200"],
  "bg.accent.pressed": colorPalette["brand.700"],
  "bg.accent.subtle": colorPalette["brand.50"],
  "bg.default": colorPalette["neutral.00"],
  "bg.default.inverse": colorPalette["neutral.800"],
  "bg.default.inverse.hovered": colorPalette["neutral.900"],
  "bg.default.inverse.pressed": colorPalette["neutral.1000"],
  "bg.error": colorPalette["red.500"],
  "bg.error.hovered": colorPalette["red.600"],
  "bg.error.light": colorPalette["red.200"],
  "bg.error.pressed": colorPalette["red.700"],
  "bg.error.subtle": colorPalette["red.100"],
  "bg.error.subtlest": colorPalette["red.50"],
  "bg.information": colorPalette["blue.600"],
  "bg.information.light": colorPalette["blue.200"],
  "bg.information.subtle": colorPalette["blue.100"],
  "bg.overlay": colorPalette["neutral.1200/32"],
  "bg.page": colorPalette["neutral.50"],
  "bg.secondary": colorPalette["neutral.75"],
  "bg.secondary.hovered": colorPalette["neutral.1200/8"],
  "bg.success": colorPalette["green.600"],
  "bg.success.hovered": colorPalette["green.700"],
  "bg.success.light": colorPalette["green.200"],
  "bg.success.subtle": colorPalette["green.100"],
  "bg.tertiary": colorPalette["neutral.150"],
  "bg.tertiary.hovered": colorPalette["neutral.200"],
  "bg.warning": colorPalette["yellow.500"],
  "bg.warning.hovered": colorPalette["yellow.600"],
  "bg.warning.light": colorPalette["yellow.200"],
  "bg.warning.subtle": colorPalette["yellow.100"],

  "border.accent": colorPalette["brand.500"],
  "border.active": colorPalette["neutral.500"],
  "border.active.hovered": colorPalette["neutral.600"],
  "border.default": colorPalette["neutral.200"],
  "border.default.hovered": colorPalette["neutral.500"],
  "border.disabled": colorPalette["neutral.75"],
  "border.error": colorPalette["red.500"],
  "border.focus": colorPalette["brand.400"],
  "border.secondary": colorPalette["neutral.150"],
  "border.success": colorPalette["green.500"],
  "border.tertiary": colorPalette["neutral.100"],
  "border.warning": colorPalette["yellow.500"],

  "fg.accent": colorPalette["brand.500"],
  "fg.accent.hovered": colorPalette["brand.600"],
  "fg.accent.strong": colorPalette["brand.700"],
  "fg.default": colorPalette["neutral.800"],
  "fg.default.inverse": colorPalette["neutral.00"],
  "fg.disabled": colorPalette["neutral.1200/32"],
  "fg.error": colorPalette["red.500"],
  "fg.error.hovered": colorPalette["red.600"],
  "fg.error.light": colorPalette["red.300"],
  "fg.error.strong": colorPalette["red.700"],
  "fg.information": colorPalette["blue.500"],
  "fg.information.light": colorPalette["blue.300"],
  "fg.information.strong": colorPalette["blue.700"],
  "fg.secondary": colorPalette["neutral.700"],
  "fg.success": colorPalette["green.500"],
  "fg.success.hovered": colorPalette["green.600"],
  "fg.success.light": colorPalette["green.300"],
  "fg.success.strong": colorPalette["green.700"],
  "fg.tertiary": colorPalette["neutral.600"],
  "fg.warning": colorPalette["yellow.500"],
  "fg.warning.hovered": colorPalette["yellow.600"],
  "fg.warning.inverse": colorPalette["neutral.800"],
  "fg.warning.light": colorPalette["yellow.300"],
  "fg.warning.strong": colorPalette["yellow.700"],
  "fg.white": colorPalette["neutral.00"],

  "link.fg.default": colorPalette["brand.500"],
  "link.fg.default.hovered": colorPalette["brand.600"],
  "link.fg.inverse": colorPalette["neutral.00"],
  "link.fg.subtle": colorPalette["neutral.800"],
  "link.fg.visited": colorPalette["purple.500"],

  "spinner.bg.default": colorPalette["neutral.1200"],
  "spinner.bg.inverse": colorPalette["neutral.50"],
  "spinner.fg.default": colorPalette["neutral.800"],
  "spinner.fg.inverse": colorPalette["neutral.200"],
} as const;

export const colorsDark = {
  ...colorPalette,

  current: "currentColor" as const,
  transparent: "transparent" as const,

  "avatar.bg.blue": colorPalette["blue.500"],
  "avatar.bg.cyan": colorPalette["cyan.900"],
  "avatar.bg.green": colorPalette["green.900"],
  "avatar.bg.magenta": colorPalette["magenta.900"],
  "avatar.bg.purple": colorPalette["purple.900"],
  "avatar.bg.yellow": colorPalette["yellow.900"],
  "avatar.fg.blue": colorPalette["blue.100"],
  "avatar.fg.cyan": colorPalette["cyan.200"],
  "avatar.fg.green": colorPalette["green.200"],
  "avatar.fg.magenta": colorPalette["magenta.200"],
  "avatar.fg.purple": colorPalette["purple.200"],
  "avatar.fg.yellow": colorPalette["yellow.200"],

  "bg.accent": colorPalette["brand.400"],
  "bg.accent.hovered": colorPalette["brand.400"],
  "bg.accent.light": colorPalette["brand.800"],
  "bg.accent.pressed": colorPalette["brand.600"],
  "bg.accent.subtle": colorPalette["brand.900"],
  "bg.default": colorPalette["neutral.1000"],
  "bg.default.inverse": colorPalette["neutral.100"],
  "bg.default.inverse.hovered": colorPalette["neutral.200"],
  "bg.default.inverse.pressed": colorPalette["neutral.300"],
  "bg.error": colorPalette["red.500"],
  "bg.error.hovered": colorPalette["red.400"],
  "bg.error.light": colorPalette["red.700"],
  "bg.error.pressed": colorPalette["red.600"],
  "bg.error.subtle": colorPalette["red.800"],
  "bg.error.subtlest": colorPalette["red.900"],
  "bg.information": colorPalette["blue.600"],
  "bg.information.light": colorPalette["blue.800"],
  "bg.information.subtle": colorPalette["blue.900"],
  "bg.overlay": colorPalette["neutral.50/32"],
  "bg.page": colorPalette["neutral.1100"],
  "bg.secondary": colorPalette["neutral.900"],
  "bg.secondary.hovered": colorPalette["neutral.50/12"],
  "bg.success": colorPalette["green.600"],
  "bg.success.hovered": colorPalette["green.400"],
  "bg.success.light": colorPalette["green.800"],
  "bg.success.subtle": colorPalette["green.900"],
  "bg.tertiary": colorPalette["neutral.700"],
  "bg.tertiary.hovered": colorPalette["neutral.50/18"],
  "bg.warning": colorPalette["yellow.500"],
  "bg.warning.hovered": colorPalette["yellow.400"],
  "bg.warning.light": colorPalette["yellow.800"],
  "bg.warning.subtle": colorPalette["yellow.900"],

  "border.accent": colorPalette["brand.300"],
  "border.active": colorPalette["neutral.700"],
  "border.active.hovered": colorPalette["neutral.600"],
  "border.default": colorPalette["neutral.600"],
  "border.default.hovered": colorPalette["neutral.500"],
  "border.disabled": colorPalette["neutral.800"],
  "border.error": colorPalette["red.200"],
  "border.focus": colorPalette["brand.300"],
  "border.secondary": colorPalette["neutral.700"],
  "border.success": colorPalette["green.500"],
  "border.tertiary": colorPalette["neutral.800"],
  "border.warning": colorPalette["yellow.500"],

  "fg.accent": colorPalette["brand.300"],
  "fg.accent.hovered": colorPalette["brand.500"],
  "fg.accent.strong": colorPalette["brand.400"],
  "fg.default": colorPalette["neutral.75"],
  "fg.default.inverse": colorPalette["neutral.800"],
  "fg.disabled": colorPalette["neutral.50/32"],
  "fg.error": colorPalette["red.300"],
  "fg.error.hovered": colorPalette["red.600"],
  "fg.error.light": colorPalette["red.300"],
  "fg.error.strong": colorPalette["red.200"],
  "fg.information": colorPalette["blue.300"],
  "fg.information.light": colorPalette["blue.300"],
  "fg.information.strong": colorPalette["blue.200"],
  "fg.secondary": colorPalette["neutral.200"],
  "fg.success": colorPalette["green.300"],
  "fg.success.hovered": colorPalette["green.600"],
  "fg.success.light": colorPalette["green.300"],
  "fg.success.strong": colorPalette["green.200"],
  "fg.tertiary": colorPalette["neutral.500"],
  "fg.warning": colorPalette["yellow.300"],
  "fg.warning.hovered": colorPalette["yellow.600"],
  "fg.warning.inverse": colorPalette["neutral.800"],
  "fg.warning.light": colorPalette["yellow.300"],
  "fg.warning.strong": colorPalette["yellow.200"],
  "fg.white": colorPalette["neutral.00"],

  "link.fg.default": colorPalette["neutral.00"],
  "link.fg.default.hovered": colorPalette["neutral.00"],
  "link.fg.inverse": colorPalette["neutral.00"],
  "link.fg.subtle": colorPalette["neutral.00"],
  "link.fg.visited": colorPalette["neutral.00"],

  "spinner.bg.default": colorPalette["neutral.50"],
  "spinner.bg.inverse": colorPalette["neutral.50"],
  "spinner.fg.default": colorPalette["neutral.00"],
  "spinner.fg.inverse": colorPalette["neutral.00"],
} as const;
