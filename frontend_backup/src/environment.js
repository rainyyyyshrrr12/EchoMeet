// Auto-detect: Vite sets MODE to 'production' during build
const IS_PROD = import.meta.env.MODE === 'production';

const server = IS_PROD ?
    "https://echomeet-graf.onrender.com" :
    "http://localhost:8000"

export default server;