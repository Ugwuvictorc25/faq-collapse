const toggleButtons = document.querySelectorAll(".faq-toggle");
const allFaq = document.querySelectorAll(".faq");

toggleButtons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const faq = e.target.parentElement.parentElement;
		allFaq.forEach((el) => {
			if (el !== faq) {
				el.classList.remove("active");
			}
		});
		faq.classList.toggle("active");
	});
});
