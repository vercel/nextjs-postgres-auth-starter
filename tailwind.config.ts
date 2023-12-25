import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
