import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      textPrimary: string,
      textSecondary: string,
      textParagraph: string,
      nav: string
    },
    fontWeight: {
      light: number,
      regular: number,
      medium: number,
      semiBold: number,
      bold: number,
      extraBold: number
    },
    sizes: {
      desktop: number,
      tablet: number,
      phone: number,
    };
  }
}
