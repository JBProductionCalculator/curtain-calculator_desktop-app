
switchWindowsAndDeleteButtons()
function switchWindowsAndDeleteButtons(){
	let allWindow = document.querySelectorAll('.one_window')
	let allTabs = document.querySelectorAll('#switch_tabs ul li')
	let allDownloadButton = document.querySelectorAll('.download_blank')

	let allBlank = document.querySelectorAll('.screen_blank')


	// функция отвечающая за переключни окон но под функцию так же подвязаны кнопки скачивния бланка
	allTabs.forEach(function(tab, index) {

		allWindow.forEach(function(oneWindow,ind){
			tab.addEventListener('click',function(){
				// viewButton(this)


				if (index === ind) {
					allWindow.forEach(function(one){
						one.style.display = 'none'
					})


					allTabs.forEach(function(tb){
						tb.classList.remove('click_tab')
					})

					this.classList.add('click_tab')


					oneWindow.style.display = 'flex'
				 	
				 	viewButtonInBlank(this,oneWindow)

				}

			})
		})
	})	

	allDownloadButton.forEach(function(butt, index){
		butt.classList.add('none')
	})
 
	viewButtonInBlank(allTabs[0], allWindow[0])


	// функция которая перекидывает кнопки скачивания в нужные бланки
	function viewButtonInBlank(clickTab,windowView){
 		let viewBlank =  windowView.querySelector('.screen_blank')
		if (clickTab.dataset.click == viewBlank.dataset.viewinblank) {

			allDownloadButton.forEach(function(oneDownloadButt){
				if (oneDownloadButt.dataset.view == viewBlank.dataset.viewinblank) {

					oneDownloadButt.classList.remove('none')

					viewBlank.parentElement.append(oneDownloadButt)
				}
			})
		}
	}
}



//подставление кнопо в нужные бланк

