@echo off
REM Double-click to start frontend dev server (non-admin)
cd /d "%~dp0"
echo Starting frontend (Vite)...
start "Frontend" cmd /k "cd /d "%~dp0" && npm run dev"
exit
