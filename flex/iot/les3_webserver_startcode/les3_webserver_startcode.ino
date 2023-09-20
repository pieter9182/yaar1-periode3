// import the needed libraries
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
ESP8266WebServer server(80); // maak een instantie van de webserver op poort 80

// LED pins
uint8_t Led1 = D3; //LED indicator 
uint8_t Led2 = D5; //LED indicator
uint8_t Led3 = D6; //LED indicator

// status of each led
bool led1Status = false; //toggle led on/off
bool led2Status = false; //toggle led on/off
bool led3Status = false; //toggle led on/off

// your data
String studentName = "Damian Pietrzak 34666"; // jouw naam +  student nummer
const char* ssid = "TechLab";
const char* password = "techlabMA";

void wifiConnect(){
  WiFi.begin(ssid, password); // connect to wifi ssid with password 
  while (WiFi.status() != WL_CONNECTED) {
      delay(1000); // wait 1 sec
      Serial.print("Connecting..");
      }
  //if connected
  Serial.print("\r\nConnected: SSID: "); 
  Serial.print(ssid);
  Serial.print("    IP address: ");
  Serial.println(WiFi.localIP());

  server.begin();
  Serial.println("HTTP server started");
 }


void handleRoot() {
  // send text/html back to the connected client
  server.send(200, "text/html", "<h3>Groetjes van Duurzaam Huis! mijnnaam is: " + studentName +
  "<h3> <form action=\"/led1\" method=\"GET\"><input type=\"submit\" name=\"GET_LED1\" value=\"Toggle Led1\"></form> " +
  "<form action=\"/led2\" method=\"GET\"><input type=\"submit\" name=\"GET_LED2\" value=\"Toggle Led2\"></form> " +
  "<form action=\"/led3\" method=\"GET\"><input type=\"submit\" name=\"GET_LED3\" value=\"Toggle Led3\"></form> "
  );
  
}

// requested url not found
void handleNotFound(){
  String message = "File Not Found\n\n";
  server.send(404, "text/plain", message);
}

void setup(){
  // Setup your LED's Here!

  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  pinMode(Led3, OUTPUT);

  
  Serial.begin(115200);      //  Start de serial monitor

/*
 * Webserver functionaliteit
 *  server.on("/"
 *  server.on("/easter_egg"
 *  server.on("/led1"
 *  server.onNotFound
 */

  // server.on("/RequestedURL") activates and calls a function when a client types in this specific url
  server.on("/", handleRoot);

  server.on("/easter_egg", [](){
        server.send(200, "text/plain", "hoera dit werkt");
    });

  server.on("/led1", [](){
    if(!led1Status && !digitalRead(Led1)){
      server.send(200, "text/plain", "led1 on");
      digitalWrite(Led1, HIGH); // led 1 on
      led1Status = true;
    } else{
          server.send(200, "text/plain", "led1 off");
      digitalWrite(Led1, LOW); // led 1 off
      led1Status = false;
    }
  });

  server.on("/led2", [](){
    if(!led2Status && !digitalRead(Led2)){
      server.send(200, "text/plain", "led2 on");
      digitalWrite(Led2, HIGH); // led 2 on
      led2Status = true;
    } else{
          server.send(200, "text/plain", "led2 off");
      digitalWrite(Led2, LOW); // led 2 off
      led2Status = false;
    }
  });

  server.on("/led3", [](){
    if(!led3Status && !digitalRead(Led3)){
      server.send(200, "text/plain", "led3 on");
      digitalWrite(Led3, HIGH); // led 3 on
      led3Status = true;
    } else{
          server.send(200, "text/plain", "led3 off");
      digitalWrite(Led3, LOW); // led 3 off
      led3Status = false;
    }
  });
 
  server.onNotFound(handleNotFound);
}

void loop(){
  if (WiFi.status() != WL_CONNECTED) wifiConnect();// reconnect Wifi if necessary 
  server.handleClient();
}
