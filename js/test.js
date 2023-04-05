$(function() {

    f_today();
	f_timer();
	f_stopWatch();
	// f_VueTest();


	function f_today() {
		$('#mainContainer').append('<p class="date"></p>');
		var formattedDate = new Date().toISOString().split("T")[0].replaceAll("-", "/");
		$('.date').text(formattedDate);
	}


	function f_timer() {
		var addZero_f = function(value) {
			if(value < 10) {
				value = '0' + value;
			}
			return value;
		}
		$('#start_stop').on('click', function() {
			var now		= new Date();
			var hours	= addZero_f(now.getHours());
			var minutes	= addZero_f(now.getMinutes());
			var seconds	= addZero_f(now.getSeconds());
			$('#timer').text(hours + ':' + minutes + ':' + seconds);
		}) 
	}


	function f_stopWatch() {
		var sec = 0;
		var min = 0;
		var hour = 0;
	  
		var timer;
	  
		// スタート
		$('#start').click(function() {
		  // 00:00:00から開始
		  sec = 0;
		  min = 0;
		  hour = 0;
		  $('#clock').html('00:00:00');
		  timer = setInterval(countup, 1000);
	  
		  $(this).prop('disabled', true);
		  $('#stop,#reset').prop('disabled', false);
		});
	  
		// ストップ
		$('#stop').click(function() {
		  // 一時停止
		  clearInterval(timer);
	  
		  $(this).prop('disabled', true);
		  $('#restart').prop('disabled', false);
		});
	  
		// リスタート
		$('#restart').click(function() {
		  // 一時停止から再開
		  timer = setInterval(countup, 1000);
	  
		  $(this).prop('disabled', true);
		  $('#stop').prop('disabled', false);
		});
	  
		// リセット
		$('#reset').click(function() {
		  // 初期状態
		  sec = 0;
		  min = 0;
		  hour = 0;
		  $('#clock').html('00:00:00');
		  clearInterval(timer);
	  
		  $('#stop,#restart,#reset').prop('disabled', true);
		  $('#start').prop('disabled', false);
		});
	  
	   /**
		* カウントアップ
		*/
		function countup()
		{
		  sec += 1;
		  if (sec > 59) {
			sec = 0;
			min += 1;
		  }
		  if (min > 59) {
			min = 0;
			hour += 1;
		  }
		  // 0埋め
		  sec_number = ('0' + sec).slice(-2);
		  min_number = ('0' + min).slice(-2);
		  hour_number = ('0' + hour).slice(-2);
	  
		  $('#stopWatch').html(hour_number + ':' +  min_number + ':' + sec_number);
		}
	}


	// $.getJSON('https://h2o-space.com/htmlbook/images.php', function(data) {
	// 	// alert('データを受信しました');
	// 	for (var i=0; i<data.length; i++) {
	// 		$('#photoAjax')
	// 			.append('<img src="' + data[i].path + '">')
	// 			.append('<div class="inner"><p>' + data[i].caption + '</p></div>')
	// 			.appendTo('#img_unit');
	// 	}
	// })

});


const app = {
	data() {
		return {
			Photos: []
		}
	},
	created: function() {
		var self = this;
		$.getJSON('https://h2o-space.com/htmlbook/images.php', function(data) {
			self.Photos = data;
		});
	}
}
Vue.createApp(app).mount('#img_unit');