$(document).ready(function(){
var btcPrice = 0
var aTransformar = 0
var dolarTodayCurrent = 0

var dolarTodayPrice = new XMLHttpRequest();
		dolarTodayPrice.open('GET', 'https://s3.amazonaws.com/dolartoday/data.json');

		dolarTodayPrice.onload = function(){
			var dolarTodayData = JSON.parse(dolarTodayPrice.responseText);
					dolarTodayCurrent = dolarTodayData.USD.transferencia;
					$('#usdCucuta').append(dolarTodayCurrent);
					$('#date').append(dolarTodayData._timestamp.fecha);
		}

		dolarTodayPrice.send();

	$('#btc').keyup(function() {
		var bitcoinPriceRequest = new XMLHttpRequest();
				bitcoinPriceRequest.open('GET', 'http://api.coindesk.com/v1/bpi/currentprice/usd.json');

		bitcoinPriceRequest.onload= function(){
			var btcData = JSON.parse(bitcoinPriceRequest.responseText);
			btcPrice = btcData.bpi.USD.rate_float;
			aTransformar = $('#btc').val();
			$('.precio').remove();
			$('#precio').append('<div class="precio">'+(btcPrice*aTransformar).toFixed(2)+' USD</div')
		}

		bitcoinPriceRequest.send();
	});

	$('#getPriceUsdBtc').click(function() {
		var bitcoinPriceRequest = new XMLHttpRequest();
				bitcoinPriceRequest.open('GET', 'http://api.coindesk.com/v1/bpi/currentprice/usd.json');

		bitcoinPriceRequest.onload= function(){
			var btcData = JSON.parse(bitcoinPriceRequest.responseText);
			btcPrice = btcData.bpi.USD.rate_float;
			aTransformar = $('#btc').val();
			$('.precio').remove();
			$('#precio').append('<div class="precio">'+(aTransformar/btcPrice).toFixed(8) +' BTC </div')
		}

		bitcoinPriceRequest.send();
	})
})