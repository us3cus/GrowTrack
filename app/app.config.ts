export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    defaultDarkMode: false,
    defaultColorMode: 'light', 
    colors: {
      primary: 'violet',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    }
  }
})
