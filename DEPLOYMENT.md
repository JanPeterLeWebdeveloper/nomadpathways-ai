# Deployment Configuration

## Compyle Platform Deployment

### Deployment Settings
- **Platform:** Compyle
- **Repository:** https://github.com/JanPeterLeWebdeveloper/nomadpathways-ai.git
- **Branch:** main
- **Build Method:** Dockerfile (multi-stage build)

### Docker Configuration
- **Dockerfile location:** Root directory (`./Dockerfile`)
- **Port exposed:** 3000
- **Start command:** `node server.js`
- **Base image:** node:20-alpine

### Build Process
1. **Stage 1 (deps):** Install dependencies with `npm ci`
2. **Stage 2 (builder):** Build Next.js app with `npm run build`
3. **Stage 3 (runner):** Create production image with standalone output

### Environment Variables
No environment variables required for this application.

### Static Assets
- Public directory copied from build to Docker image
- Static files copied from `.next/static` to production image

### Next.js Configuration
- **Output mode:** standalone (configured in `next.config.ts`)
- **Purpose:** Optimized for Docker deployment with minimal file footprint

### Deployment Checklist
- [x] Ensure `next.config.ts` has `output: 'standalone'`
- [x] Verify Dockerfile copies `.next/standalone` and `.next/static`
- [x] Confirm port 3000 is exposed
- [x] Verify start command is `node server.js`
- [ ] Test preview URL returns HTTP 200

### Troubleshooting Deployment

#### 500 Error
**Symptoms:** Preview URL shows 500 Internal Server Error

**Diagnostic steps:**
1. Check build logs for compilation errors
2. Check runtime logs for Node.js startup errors
3. Verify server.js exists in standalone output
4. Check static file copying in Dockerfile

**Common causes:**
- Missing standalone output configuration
- Incorrect file paths in Dockerfile COPY commands
- Build failures during Docker build
- Missing static assets

#### Build Failures
**Symptoms:** Docker build fails during build stage

**Diagnostic steps:**
1. Check for dependency installation errors
2. Verify package-lock.json is present
3. Check for TypeScript compilation errors
4. Review Next.js build output

**Common causes:**
- Corrupted node_modules
- Missing dependencies
- TypeScript errors in components
- Incompatible dependency versions

### Manual Deployment Steps

#### Local Docker Build
```bash
# Build image
docker build -t nomadpathways-ai:latest .

# Run container
docker run -p 3000:3000 nomadpathways-ai:latest

# Test
curl http://localhost:3000
# Should return HTTP 200 with HTML content
```

#### Compyle Deployment
1. Push code to main branch on GitHub
2. Compyle automatically detects push and triggers deployment
3. Monitor build logs in Compyle dashboard
4. Verify deployment status becomes "LIVE"
5. Test preview URL

### Rollback Procedure
If deployment fails:
1. Check recent commits for breaking changes
2. Revert to last working commit if needed
3. Trigger redeployment
4. Monitor logs for errors

### Performance Optimization
- Standalone output reduces image size by ~60%
- Multi-stage build keeps final image minimal
- Static assets served efficiently from Docker image

## Verified Build Configuration

### Build Verification (Last checked: 2026-01-26)
- ✅ Build completes successfully with `npm run build`
- ✅ Standalone output directory created at `.next/standalone/`
- ✅ server.js exists in standalone output
- ✅ Static files generated in `.next/static/`
- ✅ No TypeScript compilation errors
- ✅ No build warnings (except baseline-browser-mapping outdated data)

### Known Issues
- **baseline-browser-mapping warning:** Non-critical warning about outdated browser data. Does not affect functionality.
- **Next.js telemetry notice:** Informational message about anonymous usage data collection. Can be opted out if desired.

### Next Steps
1. Deploy to Compyle platform using Docker configuration
2. Configure app slug for preview URL
3. Monitor deployment logs for any runtime errors
4. Test preview URL for HTTP 200 response
5. Verify all landing page sections render correctly
