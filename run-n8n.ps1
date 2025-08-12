# Path to ngrok.exe
$ngrokPath = "$PWD\ngrok.exe"

# Check if ngrok exists
if (-not (Test-Path $ngrokPath)) {
    Write-Error "ngrok.exe not found at: $ngrokPath"
    Write-Host "Please make sure ngrok.exe is in the current directory"
    exit 1
}

Write-Host "Found ngrok at: $ngrokPath"

# Start ngrok in background
Start-Process -NoNewWindow -FilePath $ngrokPath -ArgumentList "http 5678"

# Wait for ngrok to start
Start-Sleep -Seconds 3

# Get the public ngrok URL
try {
    $tunnelData = Invoke-RestMethod http://127.0.0.1:4040/api/tunnels
    if ($tunnelData.tunnels.Count -eq 0) {
        Write-Error "ngrok tunnel not found. Is ngrok running?"
        exit 1
    }
} catch {
    Write-Error "Failed to connect to ngrok API. Error: $($_.Exception.Message)"
    Write-Host "Make sure ngrok is running and accessible at http://127.0.0.1:4040"
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

# Copy .env file to n8n custom directory if it exists
$envFile = "$PSScriptRoot\.env"
if (Test-Path $envFile) {
    Copy-Item $envFile "$customPath\.env" -Force
    Write-Host "✅ Copied .env file to n8n custom directory"
} else {
    Write-Host "⚠️  .env file not found in project directory"
}

# Set env var in current session
$env:WEBHOOK_TUNNEL_URL = $tunnelUrl

# Start n8n in SAME terminal (so it inherits env var)
cd $customPath
n8n
