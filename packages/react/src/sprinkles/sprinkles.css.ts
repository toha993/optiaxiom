import { keyframes } from "@vanilla-extract/css";

import { layers, theme, tokens } from "../styles";
import { mapValues } from "../utils";
import { defineProperties } from "./defineProperties";

const merge = <A, B>(objA: A, objB: B): A & B => ({ ...objA, ...objB });

const animations = {
  pulse: keyframes({
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.5 },
  }),
};

const margins = merge(
  merge(
    theme.spacing,
    mapValues(
      theme.spacing,
      (v) => `calc(-1 * ${v})`,
      (k) => `-${k}`,
    ),
  ),
  { auto: "auto" },
);

const transitions = {
  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
} as const;

const conditions = {
  conditions: {
    ...mapValues(tokens.screens, (width) => ({
      "@media": `screen and (min-width: ${width})`,
    })),
    base: {},
  },
  defaultCondition: "base",
  responsiveArray: ["base", "sm", "xl"],
} as const;

const states = {
  "focus-visible": "&:focus-visible",
  hover: "&:hover",
} as const;
const modifiers = {
  ...mapValues(
    states,
    (selector) => selector,
    (key) => `:${key}`,
  ),
};

export const props = [
  defineProperties({
    "@layer": layers.axiom,
    conditions,
    properties: {
      alignItems: ["center", "end", "normal", "start", "stretch"] as const,
      colSpan: {
        "1": { gridColumn: "span 1 / span 1" },
        "2": { gridColumn: "span 2 / span 2" },
      },
      cols: mapValues(
        {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
        },
        (cols) => ({
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }),
      ),
      display: [
        "none",
        "flex",
        "grid",
        "block",
        "inline",
        "inline-flex",
        "table-cell",
      ] as const,
      flex: {
        "1": "1 1 0%",
        auto: "1 1 auto",
        none: "none",
      },
      flexDirection: {
        column: "column",
        horizontal: "row",
        row: "row",
        vertical: "column",
      },
      flexWrap: {
        wrap: "wrap",
      },
      gap: theme.spacing,
      grow: {
        "1": { flexGrow: 1 },
      },
      height: theme.size,
      justifyContent: [
        "center",
        "end",
        "normal",
        "space-around",
        "space-between",
        "space-evenly",
        "start",
        "stretch",
      ] as const,
      letterSpacing: theme.letterSpacing,
      lineHeight: theme.lineHeight,
      marginBottom: margins,
      marginLeft: margins,
      marginRight: margins,
      marginTop: margins,
      maxWidth: theme.maxWidth,
      paddingBottom: theme.spacing,
      paddingLeft: theme.spacing,
      paddingRight: theme.spacing,
      paddingTop: theme.spacing,
      placeItems: ["center"] as const,
      shrink: {
        "1": { flexShrink: 1 },
      },
      textAlign: ["start", "center", "justify"] as const,
      width: theme.size,
    },
    shorthands: {
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/sizing/#height} */
      h: ["height"],
      leading: ["lineHeight"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides} */
      m: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side} */
      mb: ["marginBottom"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side} */
      ml: ["marginLeft"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side} */
      mr: ["marginRight"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side} */
      mt: ["marginTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides} */
      mx: ["marginLeft", "marginRight"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides} */
      my: ["marginBottom", "marginTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides-1} */
      p: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side-1} */
      pb: ["paddingBottom"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side-1} */
      pl: ["paddingLeft"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side-1} */
      pr: ["paddingRight"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#single-side-1} */
      pt: ["paddingTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides-1} */
      px: ["paddingLeft", "paddingRight"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/spacing/#multiple-sides-1} */
      py: ["paddingBottom", "paddingTop"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/sizing/#size} */
      size: ["height", "width"],
      tracking: ["letterSpacing"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/sizing/#width} */
      w: ["width"],
    },
  }),
  defineProperties({
    "@layer": layers.axiom,
    properties: {
      animation: {
        pulse: `${animations.pulse} 2s ease-in-out infinite`,
      },
      borderBottomWidth: theme.borderWidth,
      borderLeftWidth: theme.borderWidth,
      borderRadius: merge(theme.borderRadius, { inherit: "inherit" }),
      borderRightWidth: theme.borderWidth,
      borderTopWidth: theme.borderWidth,
      cursor: ["default", "pointer"] as const,
      fontFamily: theme.fontFamily,
      fontSmoothing: {
        auto: {
          WebkitFontSmoothing: "auto",
        },
      },
      fontStyle: ["normal", "italic"] as const,
      fontWeight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ] as const,
      inset: ["0"] as const,
      overflow: ["auto", "hidden", "visible"] as const,
      pointerEvents: ["none"] as const,
      position: ["absolute", "relative", "static", "sticky"] as const,
      textTransform: ["capitalize", "none", "uppercase"] as const,
      transition: {
        all: {
          ...transitions,
          transitionProperty: "all",
        },
        colors: {
          ...transitions,
          transitionProperty:
            "background-color, border-color, color, fill, stroke, text-decoration-color",
        },
      },
      whiteSpace: ["nowrap"] as const,
      zIndex: theme.zIndex,
    },
    shorthands: {
      border: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
      ],
      borderBottom: ["borderBottomWidth"],
      borderLeft: ["borderLeftWidth"],
      borderRight: ["borderRightWidth"],
      borderTop: ["borderTopWidth"],
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/border-radius/} */
      rounded: ["borderRadius"],
      z: ["zIndex"],
    },
  }),
  defineProperties({
    "@layer": layers.axiom,
    conditions,
    modifiers,
    properties: {
      fontSize: merge(theme.fontSize, { inherit: "inherit" }),
    },
  }),
  defineProperties({
    "@layer": layers.axiom,
    modifiers,
    properties: {
      backgroundColor: theme.color,
      borderBottomColor: theme.color,
      boxShadow: theme.boxShadow,
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/colors/} */
      color: theme.color,
      textDecoration: ["none", "underline"] as const,
    },
    shorthands: {
      /** {@link https://optimizely-axiom.github.io/optiaxiom/docs/colors/} */
      bg: ["backgroundColor"],
      shadow: ["boxShadow"],
    },
  }),
] as const;
