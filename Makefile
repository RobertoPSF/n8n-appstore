NGORK_PATH =C:\Users\steyl\AppData\Roaming\npm\ngrok.ps1

run:
	npm run build
	npm link

	rem Start ngrok in background with full path
	start "" /B cmd /C "$(NGROK_PATH) http 5678 > nul"

	timeout /t 3 > nul

	for /f "tokens=*" %%i in ('powershell -Command "(Invoke-RestMethod http://127.0.0.1:4040/api/tunnels).tunnels[0].public_url"') do set TUNNEL_URL=%%i

	start cmd /k "set WEBHOOK_TUNNEL_URL=%TUNNEL_URL% && cd /d %USERPROFILE%\.n8n\custom && n8n"
