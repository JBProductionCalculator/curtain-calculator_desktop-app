
switchWindowsAndDeleteButtons()
function switchWindowsAndDeleteButtons(){
	let allWindow = document.querySelectorAll('.one_window')
	let allTabs = document.querySelectorAll('#switch_tabs ul li')
	let allDownloadButton = document.querySelectorAll('.download_blank')

	// let allBlank = document.querySelectorAll('.screen_blank')



	// функция отвечающая за переключни окон но под функцию так же подвязаны кнопки скачивния бланка
	allTabs.forEach(function(tab, index) {

		allWindow.forEach(function(window,ind){
			tab.addEventListener('click',function(){
				viewButton(this)

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

	allDownloadButton.forEach(function(butt, index){
		if(index != 0){
			butt.classList.add('none')
		}
	})


	function viewButton(clickTab){
		allDownloadButton.forEach(function(button){
			button.classList.add('none')

			if (clickTab.dataset.click == button.dataset.view) {
				button.classList.remove('none')
			}
		})

		// allBlank.forEach(function(blank){
		// 	console.log(blank.dataset.viewInBlan)
		// 		console.log(btn.dataset.view)
		// 	if (blank.dataset.viewInBlan == btn.dataset.view ) {
		// 		console.log(blank)
		// 		console.log(btn)
		// 	}
		// })

		
	}
}

