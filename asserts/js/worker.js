(function(exports){
    "use strict";

    self.addEventListener('message', function(e) {

      importScripts('converter.js');

        var value      = e.data,
            result1    = "",
            result2    = "",
            //regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+(?:\.\d+)?)?)\s*(º?(f(arenheit)?|c(elsius)?)|(k(elvin)?)|(((c(enti)?)?|(k(ilo)?)?)?m(eter)?))\s*$/i;
            regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+(?:\.\d+)?)?)\s*(º?(f(arenheit)?|c(elsius)?)|(k(elvin)?)|(((c(enti)?)|(k(ilo)?))?(m(eter)?)))\s*$/i;
            value     = value.match(regexp);

        if(value){
          var num = value[1];
          var type   = value[2].replace('º','').toLowerCase();
          num = parseFloat(num);

          var measure = new Measure(num);

        if (type.substr(0) == 'c') {

          //Celsius	to Fahrenheit	ºF = ºC x 1.8 + 32
          measure = new Celsius(num);
          result1 = measure.toFarenheit().toFixed(6) + " Farenheit";

          //Celsius to	Kelvin	K = ºC + 273.15
          result2 = measure.toKelvin().toFixed(6) +" Kelvin"
        }

        else if (type.substr(0) == 'f'){
          //Fahrenheit to	Celsius	ºC = ( ºF - 32) / 1.8
          measure = new Farenheit(num);
          result1 = measure.toCelsius().toFixed(6) + " Celsius";

          //Fahrenheit to	Kelvin	K = ( ºF + 459.67) / 1.8
          result2 = measure.toKelvin().toFixed(6) +" Kelvin"
        }

        else if (type.substr(0) == 'k'){
          //Kelvin	Fahrenheit	ºF = K × 1.8 - 459.67
          measure = new Kelvin(num);
          result1 = measure.toCelsius().toFixed(6) + " Farenheit";

          //Kelvin to	Celsius	ºC = K – 273.15
          result2 = measure.toFarenheit().toFixed(6) + " Celsius";
        }

        else if (type.substr(0) == 'm'){
          //Meter	to Centimeter
          measure = new Meter(num);
          result1 = measure.toCentimeter().toFixed(6) + " Centimeter";

          //Meter	to Kilometer
          result2 = measure.toKilometer().toFixed(6) + " Kilometer";
        }

        else if (type.substr(0) == 'cm'){
          //Centimeter	to Meter
          measure = new Centimeter(num);
          result1 = measure.toMeter().toFixed(6) + " Meter";

          //Centimeter	to Kilometer
          result2 = measure.toKilometer().toFixed(6) + " Kilometer";
        }

        else if (type.substr(0) == 'km'){
          //Centimeter	to Meter
          measure = new Kilometer(num);
          result1 = measure.toMeter().toFixed(6) + " Meter";

          //Kilometer to Centimeter
          result2 = measure.toCentimeter().toFixed(6) + " Centimeter";
        }
      }
      else{

      }
        self.postMessage(result1+" "+result2);
    }, false);

})(this);
