const getData = async () => {
	const response = await fetch('api/api.json');
	const data = await response.json();
	const products = data.result.elements;

	console.log(products);

	getElements(products);
}

getData();

const getElements = (products) => {
	const productList = document.querySelector('.products__list');

	for (const key in products) {
		console.log(products[key]);

		productList.innerHTML += `
			<li class="products__item">
				<div 
					class="
						amount ${products[key].is_best ? 'best' : ''}
						amount ${products[key].price_key === '50%' ? 'best percent50off' : ''}
					"
				>
					$${products[key].amount}
					<span class="amount-per">
						/${products[key].license_name.includes('Year') ? 'PER YEAR' : 'MO'}
					</span>
				</div>

				<div class="product-info">
					<h3 class="product-name">
						${products[key].name_prod}
					</h3>
					<h4 class="product-name product-license">
						${products[key].license_name}
					</h4>

					<a 
						href="${products[key].link}" 
						class="download-button"
						onclick="downloadArrow()"
					>
						Download 
					</a>
				</div>
			</li>
		`
	}
}

const downloadArrow = () => {
	const arrow = document.querySelector('.download-arrow');
	
	arrow.classList.add('show');
}
