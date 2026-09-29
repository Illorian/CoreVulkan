#pragma once
#include "common.hpp"

class Devices {

	public:

	Devices(){}

	VkPhysicalDevice PickingAlgorithm(std::vector<VkPhysicalDevice>& deviceList)
	{

	return deviceList[0];
		
	}


	private:



};