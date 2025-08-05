# Path to ngrok.exe
$ngrokPath = "$PSScriptRoot\ngrok.exe"

# Start ngrok in background
Start-Process -NoNewWindow -FilePath $ngrokPath -ArgumentList "http 5678"

# Wait for ngrok to start
Start-Sleep -Seconds 3

# Get the public ngrok URL
$tunnelData = Invoke-RestMethod http://127.0.0.1:4040/api/tunnels
if ($tunnelData.tunnels.Count -eq 0) {
    Write-Error "ngrok tunnel not found. Is ngrok running?"
    exit 1
}

$tunnelUrl = $tunnelData.tunnels[0].public_url
Write-Host "Tunnel URL: $tunnelUrl"

# Run build steps
npm run build
npm link

# Ensure .n8n/custom exists
$customPath = "$env:USERPROFILE\.n8n\custom"
if (-not (Test-Path $customPath)) {
    New-Item -ItemType Directory -Path $customPath
}

# Set env var in current session
$env:WEBHOOK_TUNNEL_URL = $tunnelUrl

# Start n8n in SAME terminal (so it inherits env var)
cd $customPath
n8n
