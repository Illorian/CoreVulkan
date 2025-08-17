@echo off
setlocal enabledelayedexpansion

REM Set path to glslc (optional if already in PATH)
set GLSLC=glslc

REM Set input and output directories
set SHADER_DIR=shaders
set OUTPUT_DIR=shaders\compiled

REM Create output dir if it doesn't exist
if not exist %OUTPUT_DIR% (
    mkdir %OUTPUT_DIR%
)

REM Compile all .vert and .frag files
for %%F in (%SHADER_DIR%\*.vert) do (
    echo Compiling %%~nxF...
    %GLSLC% "%%F" -o "%OUTPUT_DIR%\%%~nF.vert.spv"
)

for %%F in (%SHADER_DIR%\*.frag) do (
    echo Compiling %%~nxF...
    %GLSLC% "%%F" -o "%OUTPUT_DIR%\%%~nF.frag.spv"
)

echo All shaders compiled!
pause