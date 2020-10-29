let allWindow = document.querySelectorAll('.one_window')
let allTabs = document.querySelectorAll('#switch_tabs ul li')


allTabs.forEach(function(tab, index) {
	allWindow.forEach(function(window,ind){
		tab.addEventListener('click',function(){
			if (index === ind) {
				allWindow.forEach(function(one){
					one.style.display = 'none'
				})

				window.style.display = 'flex'
			}

		})

	})
})