---
name: aws-cliqrise-deploy
description: Deploy CliqRise sites to AWS S3 and CloudFront. Use when deploying marketing site, app, invalidating cache, or managing CliqRise AWS infrastructure.
---

# CliqRise AWS Deployment

## AWS Account Structure

CliqRise uses a 4-account AWS structure:
- **Management** - AWS Organizations, billing
- **Dev** - Development environment
- **QA** - Testing environment  
- **Prod** - Production (cliqrise-prod profile)

## Marketing Site (www.cliqrise.ai)

| Resource | Value |
|----------|-------|
| S3 Bucket | `cliqrise-marketing-prod` |
| CloudFront Distribution | `E8IKZETMO9Z93` |
| AWS Profile | `cliqrise-prod` |
| Region | `us-east-1` |

### Build & Deploy

```powershell
# Build the Vite project
cd D:\users\malik\projects\cliqrise-marketing
pnpm build

# Deploy to S3 (from build output directory)
cd dist/public
aws s3 sync . s3://cliqrise-marketing-prod --profile cliqrise-prod --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --profile cliqrise-prod --distribution-id E8IKZETMO9Z93 --paths "/*"
```

### Build Output

The Vite build outputs to `dist/public/` (not `dist/` or `dist/client/`).

Check `vite.config.ts` if unsure - look for `build.outDir` setting.

## Application (app.cliqrise.ai)

| Resource | Value |
|----------|-------|
| Infrastructure | ECS + ALB |
| AWS Profile | `cliqrise-prod` |
| Cookie Scope | `app.cliqrise.ai` only (not parent domain) |
| Availability Zones | us-east-1b, 1c, 1d (WorkSpaces compatible) |

## SPA Configuration

CloudFront must be configured to handle client-side routing:

- **Error Pages**: 403 and 404 errors should return `index.html` with 200 status
- **Default Root Object**: `index.html`

This enables React Router / wouter to handle all routes client-side.

## Common Issues

### "Access Denied" after deploy
- CloudFront cache not invalidated
- Run the invalidation command and wait 2-3 minutes

### New routes return 404
- CloudFront error page configuration missing
- Ensure 403/404 errors return index.html

### Wrong AWS account
- Always use `--profile cliqrise-prod` for production
- Verify with: `aws sts get-caller-identity --profile cliqrise-prod`
