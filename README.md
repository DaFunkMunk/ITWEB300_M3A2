Application Programming Interfaces - Weather Application

Purpose

Some of the code required for Web sites to interact with a server can be complicated.  Fortunately, Application Programming Interfaces (APIs) can simplify much of this code.  In this assignment, you will use the OpenWeatherMap API.

 

Assignment Instructions

This assignment asks you to explore and integrate live weather data using the OpenWeatherMap APILinks to an external site.. Follow these steps to successfully complete the assignment:

 

Step 1. Register for a Free OpenWeatherMap Account:

Start by visiting [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account. Upon registration, you will receive an email containing essential information on how to access their API.

 

Step 2. Retrieve Weather Information:

Utilize the OpenWeatherMap API to obtain live weather details. The endpoint to be used is as follows:

http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=YOURAPIKEY&units=imperial

Extract and display the temperature, minimum temperature, maximum temperature, pressure, and the name of the city from the retrieved data.

 

Step 3. User Input for City Search:

Enhance the user experience by allowing them to input the name of the city. This enables them to search for weather details specific to the desired location. 

 

Step 4. Hard Mode Challenge - Current User Location:

For those seeking an extra challenge, implement the ability to automatically find the user's coordinates (latitude and longitude). Use this information to fetch weather data based on the user's current location. This adds a dynamic and personalized touch to your weather application.

 

Step 5. API Key Usage:

Remember to use your own API key for authentication. However, in case of any issues, you can use the provided backup key:

https://api.openweathermap.org/data/2.5/weather?q=houston&appid=feeb1e15933c3850daf212f6801a413c&units=imperial
