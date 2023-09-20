int LDR_In = A0;

int lichtHoeveelheid;

uint8_t led1 = D3;
uint8_t led2 = D5;
uint8_t led3 = D6;

void setup(){
  Serial.begin(9600);
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
  pinMode(led3,OUTPUT);
}

void loop(){
  lichtHoeveelheid = analogRead(LDR_In);
  if(lichtHoeveelheid <500){
      digitalWrite(led1,HIGH);
      digitalWrite(led2,HIGH);
      digitalWrite(led3,HIGH);
    }
    else{
      digitalWrite(led1,LOW);
      digitalWrite(led2,LOW);
      digitalWrite(led3,LOW);
    }

  Serial.println(lichtHoeveelheid);
}
