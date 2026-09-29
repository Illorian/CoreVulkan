cmake_minimum_required(VERSION 3.20)

project(CoreVulkan LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Vulkan REQUIRED)

add_executable(CoreVulkan
    src/main.cpp
)

# Includes
target_include_directories(CoreVulkan PRIVATE
    "${CMAKE_SOURCE_DIR}"
    "${CMAKE_SOURCE_DIR}/headers"
    "${CMAKE_SOURCE_DIR}/dep/GLFW/include"
    "${CMAKE_SOURCE_DIR}/dep/GLM/glm_master"
)
# For shader compiling
target_compile_definitions(CoreVulkan PRIVATE
    SHADER_DIR="${CMAKE_SOURCE_DIR}/shaders"
)

# Link GLFW + Vulkan
target_link_libraries(CoreVulkan PRIVATE
    Vulkan::Vulkan
    "${CMAKE_SOURCE_DIR}/dep/GLFW/lib-vc2026/glfw3.lib"
)
