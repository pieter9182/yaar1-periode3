// JSON POST requests: https://randomnerdtutorials.com/esp8266-nodemcu-http-get-post-arduino/#http-post
// HTTPS requests: https://randomnerdtutorials.com/esp8266-nodemcu-https-requests/
// WiFi
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
// JSON
#include <ArduinoJson.h>

#include "DHT.h"
#define DHTTYPE DHT11       // DHT 11 sensor
uint8_t DHTPin = D7;        // DHT Sensor data input
DHT dht(DHTPin, DHTTYPE);   // Initialize DHT sensor.    
float Temperature;          // temperature
float Humidity;             // humidity
float HeatIndex;            // Heatindex
float LichtHoeveelheid;

uint8_t led1 = D3;
uint8_t led2 = D5;
uint8_t led3 = D6;



#include <WiFiClient.h>

// WiFi
const char* ssid = "MediaLab";
const char* password = "Mediacollege";

// POST
String serverProtocol = "https://";
String serverIP = "34666.hosts1.ma-cloud.nl"; // Ma cloud url or localhost IP
String serverDirectory = "fingerpirnt/post.php"; // path naar directory, bijvoorbeeld: "duurzaamhuis/post.php" 
String URL = ""; // URL om data naar te versturen, wordt automatisch aangemaakt.
const uint8_t fingerprint[20] = {0x69, 0x9C, 0x11, 0xAF, 0x88, 0xB4, 0xD9, 0x10, 0x5E, 0x9B, 0xD7, 0x76, 0xE7, 0xB1, 0xD8, 0x1D,
0xD9, 0x62, 0x09, 0xEE}; // fingerprint van jou server

// JSON
const int capacity = JSON_OBJECT_SIZE(4);
StaticJsonDocument<capacity> doc;
char jsonOut[256];

// JSON testing
int count = 0;

void readDHT11(){
  /* 
   *  read the sensor
   *  sampling rate DHT11 is max. 1Hz 
   *  the DHT11 is known for erroneous readings
   */
    float temperature =  round(dht.readTemperature()*10)/10; // Gets the values of the temperature
    float humidity = round(dht.readHumidity()*10)/10; // Gets the values of the humidity
    // Compute heat index in Celsius (isFahrenheit = false)
    float heatindex = round(dht.computeHeatIndex( Temperature, Humidity, false)*10)/10; 
    float lichtHoeveelheid = analogRead(A0);
        
    if(isnan(temperature) || isnan(humidity) || isnan(heatindex)){
        // sensor error
        Serial.println("DHT11 sensor error");
    }
    else{
        // the DHT11 readings look ok 
        Temperature = temperature;
        Humidity =  humidity ;
        HeatIndex = heatindex;
        LichtHoeveelheid = lichtHoeveelheid;
        
        // show in Serial Monitor
        Serial.print("Temp. ");
        Serial.print(Temperature);
        Serial.print("C. Humidity  ");
        Serial.print(humidity);
        Serial.print("% Heatindex ");
        Serial.print(heatindex);
        Serial.print(" licht: ");
        Serial.println(LichtHoeveelheid);
        
      }
 }

void wifiConnect(){
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting...");
  }
  Serial.print("\r\nConnected: SSID: "); 
  Serial.print(ssid);
  Serial.print("    IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println("HTTP server started");
  Serial.println("\nSending POST data to: " + URL + "\n");
}

void CreateJSON() {
  doc["Humidity"] = Humidity;
  doc["Temperature"] = Temperature;
  doc["HeatIndex"] = HeatIndex;
  doc[" LichtHoeveelheid"] = LichtHoeveelheid;
  serializeJson(doc, jsonOut);

  count = count + 1;
}

void SendPOST() {
  //WiFiClient client;
  WiFiClientSecure client;
  client.setFingerprint(fingerprint);
  HTTPClient https;
  
  if( https.begin(client, URL) ){
    https.addHeader("Content-Type", "application/json");
    int responseCode = https.POST(jsonOut);
    String responseMsg = https.getString();
    Serial.print("[HTTPS] POST code: ");
    Serial.print(responseCode);
    Serial.print("\n[HTTPS] Response: ");
    Serial.println(responseMsg);
    https.end();  
  } else Serial.println("POST is not working, check the steps in the powerpoint again.");
}

void setup() {
  Serial.begin(115200);

  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
  pinMode(led3,OUTPUT);

  // Maak de POST url op basis van protocol, serverIP & directory
  if(serverProtocol.length() > 0) URL += serverProtocol;
  URL += serverIP;
  if(serverDirectory.length() > 0) URL += "/" + serverDirectory;
}

void loop() {
  if(WiFi.status() != WL_CONNECTED) wifiConnect();
  CreateJSON();
  SendPOST();
  readDHT11();
  delay(7500);
}
