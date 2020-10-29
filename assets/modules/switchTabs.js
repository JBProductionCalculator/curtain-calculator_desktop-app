let allWindow = document.querySelectorAll('.one_window')
let allTabs = document.querySelectorAll('#switch_tabs ul li')


allTabs.forEach(function(tab, index) {
	// tab.classList.remove('click_tab')
	// console.log(tab)


	allWindow.forEach(function(window,ind){
		tab.addEventListener('click',function(){
			this.classList.add('click_tab')

			if (index === ind) {
				allWindow.forEach(function(one){
					one.style.display = 'none'
			})


			allTabs.forEach(function(tb){
				tb.classList.remove('click_tab')
			})

			this.classList.add('click_tab')


				window.style.display = 'flex'
			}

		})

	})
})