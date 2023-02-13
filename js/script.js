const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.burger-icon')
const allNavItems = document.querySelectorAll('.nav_item')
const footerYear = document.querySelector('.footer__year')

const handleNavMobile = () => {
    navMobile.classList.toggle('nav-active')

    allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-active')
			
		})
	})
}


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear();

navBtn.addEventListener('click', handleNavMobile)