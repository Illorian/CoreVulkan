#pragma once



#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>


#include <iostream>
#include <stdexcept>
#include <cstdlib>
#include <string>
#include <vector>
#include <optional>
#include <chrono>
#include <thread>
#include <set>
#include <cstring>
#include <limits>
#include <algorithm>
#include <fstream>
#include <glm/glm.hpp>

//-----------------

#include "headers/validationlayers.hpp"
#include "headers/extensionlayers.hpp"
#include "headers/pipeline.hpp"
#include "headers/buffers.hpp"
#include "headers/device.hpp"