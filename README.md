# NomadPathways AI

Landing page application for NomadPathways AI platform.

## Technology Stack
- **Framework:** Next.js 16.0.1
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4
- **Image Optimization:** Sharp 0.34.5
- **Deployment:** Docker with standalone output mode
- **Port:** 3000

## Project Structure
```
nomadpathways-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── globals.css       # Global styles
│   └── components/
│       └── landing/          # Landing page components
│           ├── Hero.tsx
│           ├── HowItWorks.tsx
│           ├── Roles.tsx
│           ├── Features.tsx
│           ├── Pricing.tsx
│           └── Footer.tsx
├── public/                   # Static assets
├── Dockerfile               # Multi-stage Docker build
├── next.config.ts           # Next.js configuration (standalone mode)
└── package.json             # Dependencies and scripts
```

## Local Development

### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/JanPeterLeWebdeveloper/nomadpathways-ai.git
   cd nomadpathways-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle with standalone output
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint

## Docker Deployment

### Build Docker Image
```bash
docker build -t nomadpathways-ai .
```

### Run Docker Container
```bash
docker run -p 3000:3000 nomadpathways-ai
```

### Docker Build Process
The Dockerfile uses a multi-stage build:
1. **deps stage** - Installs dependencies using `npm ci`
2. **builder stage** - Builds the Next.js application
3. **runner stage** - Production image with standalone output

### Environment Variables
No environment variables required. Application runs with default configuration.

### Port Configuration
- Development: 3000
- Production (Docker): 3000 (exposed via EXPOSE directive)

## Deployment Configuration

### Next.js Standalone Mode
The application uses Next.js standalone output mode for optimized Docker deployments:
- Configured in `next.config.ts` with `output: 'standalone'`
- Generates `.next/standalone` directory containing only necessary files
- Significantly reduces Docker image size

### Compyle Platform Deployment
Deployed on Compyle platform with the following configuration:
- **Port:** 3000
- **Start command:** `node server.js`
- **Build command:** `npm run build`
- **Docker:** Multi-stage build from Dockerfile

## Landing Page Sections
1. **Hero** - Main hero section with call-to-action
2. **How It Works** - Process explanation
3. **Roles** - Target user roles and use cases
4. **Features** - Key features and benefits
5. **Pricing** - Pricing tiers and plans
6. **Footer** - Footer with links and information

## Troubleshooting

### 502 Bad Gateway
If you encounter a 502 error:
1. **Most common cause:** Missing Sharp library
   - Solution: `npm install sharp --save`
   - Rebuild: `npm run build`
2. Check that application is starting in Docker container
3. Verify port 3000 is exposed and accessible

### 500 Error on Deployment
If you encounter a 500 error:
1. Check build logs for compilation errors
2. Verify `server.js` exists in `.next/standalone/` after build
3. Ensure standalone mode is enabled in `next.config.ts`
4. Verify all static assets copied correctly
5. Check runtime logs for Node.js errors

### Build Failures
If build fails:
1. Delete `node_modules` and `.next` directories
2. Run `npm ci` for clean dependency install
3. Run `npm run build` again
4. Check for React 19 / Next.js 16 compatibility issues

### Development Server Issues
If dev server won't start:
1. Ensure port 3000 is not in use
2. Delete `.next` directory and restart
3. Verify Node.js version is 20 or higher

## License
Private repository - All rights reserved

## Contact
For issues or questions, contact the development team.
