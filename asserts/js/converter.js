(function(exports) {
    "use strict";

    function Measure(value,type){
      this.value = value || 0;
      this.type = type || "S.I";
      this.getMeasure = function(){
        if (!value || !type){
          console.error("Data missing");
          return false;
        }
        console.log("The Mesure is "+this.value+this.type);
        return this.value + this.type;
      }
    }

    function Temperature(value,type){
      Measure.call(this, value,type);
    }

    function Length(value,type){
      Measure.call(this, value,type);
    }

    function Celsius(value){
      this.type = 'c';
      Temperature.call(this, value, this.type);
      //Celsius	to Fahrenheit	ºF = ºC x 9/5 + 32
      this.toFarenheit = function(){
        console.log("Converted_1 is " +(((this.value * (9/5)) + 32)+" Farenheit"));
        return (this.value * (9/5)) + 32;
      }
      //Celsius to	Kelvin	K = ºC + 273.15
      this.toKelvin = function(){
        console.log("Converted_2 is " +((this.value + 273.15)+" Kelvin"));
        return (this.value + 273.15);
      }
    }

    function Farenheit(value){
      this.type = 'f';
      Temperature.call(this,value,this.type);
      //Fahrenheit to	Celsius	ºC = ( ºF - 32) * (5/9)
      this.toCelsius = function(){
        console.log("Converted_1 is " +(((this.value - 32)  * (5/9))+" Celsius"));
        return (this.value - 32)  * (5/9);
      }
      //Fahrenheit to	Kelvin	K = ( ºF + 459.67) / 1.8
      this.toKelvin = function(){
        console.log("Converted_2 is " +(((this.value + 459.67)  * (5/9))+" Kelvin"));
        return (this.value + 459.67)  * (5/9);
      }
    }

    function Kelvin(value){
      this.type = 'k';
      Temperature.call(this,value,this.type);
      //Kelvin	Fahrenheit	ºF = K × 1.8 - 459.67
      this.toCelsius = function(){
        console.log("Converted_1 is " +(((this.value * (9/5))  - 459.67)+" Celsius"));
        return (this.value * (9/5))  - 459.67;
      }
      //Kelvin to	Celsius	ºC = K – 273.15
      this.toFarenheit = function(){
        console.log("Converted_2 is " +((this.value -273.15)+" Farenheit"));
        return (this.value -273.15);
      }
    }

    function Meter(value){
      this.type = 'm';
      Length.call(this,value,this.type);
      //Meter to	toKilometer
      this.toKilometer  = function(){
        console.log("Converted_1 is " +((this.value / 1000)+" Kilometer"));
        return (this.value / 1000);
      }
      //Meter	to Centimeter
      this.toCentimeter = function(){
        console.log("Converted_2 is " +((this.value * 100)+" Centimeter"));
        return (this.value * 100);
      }
    }

    function Centimeter(value){
      this.type = 'cm';
      Length.call(this,value,this.type);
      //Centimeter to	Meter
      this.toMeter = function(){
        console.log("Converted_1 is " +((this.value / 1000)+" Meter"));
        return (this.value / 1000);
      }
      //Centimeter to	Kilometer
      this.toKilometer = function(){
        console.log("Converted_2 is " +((this.value / 100000)+" Kilometer"));
        return (this.value / 100000);
      }
    }

    function Kilometer(value){
      this.type = 'km';
      Length.call(this,value,this.type);
      //Kilometer to	Meter
      this.toMeter = function(){
        console.log("Converted_1 is " +((this.value * 1000)+" Meter"));
        return (this.value * 1000);
      }
      //Kilometer to	Centimeter
      this.toCentimeter = function(){
        console.log("Converted_2 is " +((this.value * 100000)+" Centimeter"));
        return (this.value * 100000);
      }
    }


    exports.Measure = Measure;
    exports.Temperature = Temperature;

    exports.Length = Length;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;
    exports.Kelvin = Kelvin;

    exports.Meter = Meter;
    exports.Kilometer = Kilometer;
    exports.Centimeter = Centimeter;

})(this);
