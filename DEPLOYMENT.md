# Deployment Guide

This document explains the automated deployment process for the Swift Portfolio website using GitHub Actions.

## Overview

The portfolio is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process includes building, testing, and deploying the React application.

## Deployment Workflows

### 1. Main Deployment Workflow (`.github/workflows/deploy.yml`)

**Triggers:**
- Push to `main` branch (deploys to GitHub Pages)
- Pull request to `main` branch (builds and tests only)
- Manual trigger via GitHub Actions UI

**Process:**
1. **Build & Test Job**:
   - Sets up Node.js 20 with npm caching
   - Installs dependencies with `npm ci`
   - Runs ESLint for code quality checks
   - Builds the project for production
   - Uploads build artifacts

2. **Deploy Job** (only for main branch):
   - Downloads build artifacts
   - Configures GitHub Pages
   - Deploys to GitHub Pages

### 2. PR Preview Workflow (`.github/workflows/pr-preview.yml`)

**Triggers:**
- Pull request events (opened, synchronized, reopened)

**Process:**
- Builds the project in development mode
- Runs linting checks
- Comments on PR with build status

## Configuration Details

### GitHub Pages Setup

The site is configured to deploy to GitHub Pages with:
- **Base URL**: `/swift-site-portfolio/` (set in `vite.config.ts:8`)
- **Build Output**: `dist/` directory
- **Branch**: Deployed from GitHub Actions (not from a branch)

### Build Configuration

**Production Build:**
```bash
npm run build
```
- Builds with Vite in production mode
- Outputs to `dist/` directory
- Uses base path `/swift-site-portfolio/`

**Development Build:**
```bash
npm run build:dev
```
- Builds in development mode
- Used for PR previews

## Manual Deployment

To manually trigger a deployment:

1. Go to the GitHub repository
2. Click on "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow" button
5. Select the `main` branch and click "Run workflow"

## Environment Variables

No environment variables are required for the current setup. All configuration is handled through:
- `vite.config.ts` - Build configuration
- `package.json` - Scripts and dependencies

## Prerequisites

For the deployment to work, ensure:

1. **Repository Settings**:
   - GitHub Pages is enabled
   - Pages source is set to "GitHub Actions"

2. **Branch Protection** (recommended):
   - Require status checks before merging
   - Require branches to be up to date

3. **Repository Permissions**:
   - Actions have write permissions to GitHub Pages

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check the Actions tab for detailed error logs
   - Ensure all dependencies are properly listed in `package.json`
   - Verify ESLint passes locally with `npm run lint`

2. **Deployment Fails**:
   - Verify GitHub Pages is enabled in repository settings
   - Check that Pages source is set to "GitHub Actions"
   - Ensure the workflow has proper permissions

3. **Site Not Loading**:
   - Confirm the base path in `vite.config.ts` matches repository name
   - Check that all assets are using relative paths

### Checking Deployment Status

1. **GitHub Actions**: Check the Actions tab for workflow run status
2. **GitHub Pages**: Repository Settings → Pages shows deployment status
3. **Live Site**: Visit `https://[username].github.io/swift-site-portfolio/`

## Development Workflow

### For Contributors

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes and Test Locally**:
   ```bash
   npm run dev        # Start development server
   npm run lint       # Check code quality
   npm run build      # Test production build
   ```

3. **Create Pull Request**:
   - PR will automatically trigger build and test
   - Merge to `main` will trigger deployment

### For Maintainers

1. **Review PR**: Ensure build passes and changes look good
2. **Merge**: Merging to `main` triggers automatic deployment
3. **Monitor**: Check Actions tab to ensure deployment succeeds

## Security Considerations

- The workflow uses minimal required permissions
- Dependencies are installed with `npm ci` for reproducible builds
- Build artifacts are only retained for 1 day
- No secrets or environment variables are exposed

## Performance Optimizations

The workflow includes several performance optimizations:
- Node.js 20 with npm caching
- Artifact caching between jobs
- Minimal artifact retention (1 day)
- Separate build and deploy jobs for efficiency