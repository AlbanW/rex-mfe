@echo off
setlocal

call npm install
if errorlevel 1 exit /b %errorlevel%

call npm run dev:all
exit /b %errorlevel%
