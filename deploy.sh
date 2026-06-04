#!/bin/bash
# ============================================
# Manual deploy script
# Run this on your server for first-time setup
# or manual deployments
# ============================================

set -e

echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest code..."
git pull origin main 2>/dev/null || git pull origin master

# Build and start containers
echo "🔨 Building Docker image..."
docker compose down 2>/dev/null || true
docker compose up -d --build

# Clean up old images
echo "🧹 Cleaning up..."
docker image prune -f

echo ""
echo "✅ Deployment complete!"
echo "🌐 Site is live at http://$(hostname -I | awk '{print $1}' 2>/dev/null || echo 'your-server-ip')"
echo ""
echo "📊 Container status:"
docker compose ps
