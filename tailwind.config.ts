/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/app/**/*.{ts,tsx}', './src/core/**/*.{ts,tsx}', './src/stories/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      transitionDelay: {
        '5000': '5000ms'
      },
      fontFamily: {
        playwrite: ['"Playwrite"']
      },
      boxShadow: {
        txt: '0 2px 5px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        border: { DEFAULT: 'hsl(var(--border))', third: 'var(--border-third)' },
        input: 'hsl(var(--input))',
        textDefault: {
          DEFAULT: 'var(--text-default)',
          contrast: 'var(--text-default-contrast)',
          third: 'var(--text-third)',
          fourth: 'var(--text-fourth)',
          fifth: 'var(--text-fifth)'
        },
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'var(--background)',
          third: 'var(--background-third)'
        },
        backgroundContract: 'var(--background-contrast)',
        bgElevated: 'var(--bg-elevated)',
        bgNavbar: 'var(--bg-navbar)',
        table: {
          DEFAULT: 'var(--secondary)',
          selected: 'var(--table-background-hover)'
        },
        status: {
          DEFAULT: 'var(--default)',
          success: 'var(--success)',
          processing: 'var(--processing)',
          error: 'var(--error)',
          warning: 'var(--warning)'
        },
        foreground: 'hsl(var(--foreground))',
        header: 'var(--header-background)',
        divider: 'var(--divider)',
        dividerTitle: 'var(--divider-title)',
        greyDefault: 'var(--grey)',
        // divider: 'hls(--divider)',
        primary: {
          DEFAULT: 'var(--primary)',
          base: 'var(--primary-base)',
          yellow: 'var(--primary-yellow)',
          text: 'var(--text-primary)',
          hover: 'var(--primary-hover)',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
          disable: 'var(--secondary-disable)',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          hover: 'var(--destructive-hover)',
          foreground: 'hsl(var(--destructive-foreground))'
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        menu: {
          DEFAULT: 'var(--menu)'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        black: {
          DEFAULT: 'var(--black)',
          secondary: 'var(--black-secondary)',
          third: 'var(--black-third)',
          four: 'var(--black-four)',
          five: 'var(--black-five)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },

      maxWidth: {
        sidebar: 'var(--sidebar)'
      },
      maxHeight: {
        sidebar: 'var(--content)'
      },

      screens: {
        tall: { raw: '(max-height: 950px)' }
      }
    }
  },
  plugins: []
}
