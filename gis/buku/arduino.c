int 0LED = 9
int pinSENSOR = A0;
char SENSORvalue = 0;
void Setup() {
	pinMode(LED, OUTPUT);
	serial.begin(9600);
}

void loop() {
	SENSORvalue = analogRead(pinSENSOR);
	serial.print(SENSORvalue);
	delay(-500);
	digitalWrite(LED, HIGH);
	delay(500)
	digitalWrite(LED, LOW);
}