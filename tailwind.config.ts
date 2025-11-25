import type { Config } from 'tailwindcss'
const config: Config={content:['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}',],theme:{extend:{colors:{primary:{DEFAULT:'#14B8A6',50:'#E6FAF8',100:'#C2F4ED',500:'#14B8A6',600:'#0F9488',700:'#0D7C72',},secondary:{DEFAULT:'#FBBF24',50:'#FEF9E7',100:'#FEF3C7',500:'#FBBF24',},accent:{DEFAULT:'#FB7185',50:'#FEE2E7',500:'#FB7185',},},},},plugins:[],}
export default config
