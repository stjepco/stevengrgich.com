import Typography from "typography"

const font = [ "Barlow", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]

const typography = new Typography({ 
  baseFontSize: "20px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Barlow",
      styles: [ "600", "400"]
    }
  ],
  headerFontFamily: font,
  bodyFontFamily: font,
  bodyColor: "hsl(0,0%,0%,0.9)",
  headerWeight: 600,
  blockMarginBottom: 0.5,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h2: {
      ...adjustFontSizeTo('26px'),
      marginTop: "4rem",
      marginBottom: 0
    },
    ['@media (max-width:480px)']: {
      html: {
        // ...adjustFontSizeTo('24px')
        fontSize: "112.5%"
      }
    }
  })
})

// Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles();
// }

export default typography
