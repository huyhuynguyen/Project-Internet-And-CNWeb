var obj=JSON.parse(localStorage.getItem('myqueryProject_Thanhtoan'));
console.log(obj);

function DoiTien(price) {
	var result=[];
	var arrT=price.toString().split('');
	arrT.reverse();
	var t=0;
	for (var j=0;j<=Math.floor(arrT.length/3);j++)
	{
		if (t+3>arrT.length-1)
			result.push(arrT.slice(t).reverse().join(''));
		else 
		{
			result.push(arrT.slice(t,t+3).reverse().join(''),'.');
		}
		t+=3;
	}
	result.reverse();
	return result;
}


var imgProduct=document.querySelector('.product__show-img-container');
imgProduct.innerHTML+=`
    <img src="${obj.imgSrc}" alt="" title="${obj.productName.toUpperCase()}" class="product__show-img">
`;
var productName=document.querySelector('.product-name span');
productName.innerText=obj.productName.toUpperCase();

var moneyProduct=+obj.productMoney.split('.').join('');
var productMoney=document.querySelector('.money');
productMoney.innerHTML=` ${obj.productMoney} <span>đ</span>`;

var totalMoney=document.querySelector('.totalMoney');

document.querySelector('#numberProduct').value=obj.numberProductsSold;
var valueInput=obj.numberProductsSold;
var numberProducts=document.querySelector('#numberProduct');
var total=moneyProduct*+numberProducts.value;
totalMoney.innerHTML=` ${DoiTien(total).join('')} <span>đ</span>`;

var btnMinus=document.querySelector('#btn-minus');
btnMinus.onclick=function() {
    if (+numberProducts.value>1)
    {
        numberProducts.value=+numberProducts.value-1;
        total=moneyProduct*+numberProducts.value;
        totalMoney.innerHTML=` ${DoiTien(total).join('')} <span>đ</span>`;
    }
}

var btnPlus=document.querySelector('#btn-plus');
btnPlus.onclick=function() {
    {
        numberProducts.value=+numberProducts.value+1;
        total=moneyProduct*+numberProducts.value;
        totalMoney.innerHTML=` ${DoiTien(total).join('')} <span>đ</span>`;
    }
}

numberProducts.oninput=function() {
    if (numberProducts.value[numberProducts.value.length-1]=="." || Number.isInteger(+numberProducts.value)==false || +numberProducts.value==0 || +numberProducts.value<0)
        document.querySelector('#checkErrorInput').innerText="Wrong input";
    else
    {
        document.querySelector('#checkErrorInput').innerText="";
        total=moneyProduct*+numberProducts.value;
        totalMoney.innerHTML=` ${DoiTien(total).join('')} <span>đ</span>`;
    }
}

var continueBuy=document.querySelector('input[name="continueToBuy"]');
continueBuy.onclick=function() {
	window.location.href="Productspage.html";
}

window.onscroll=function() {
	if (document.querySelector('body').scrollTop > 70 || document.documentElement.scrollTop > 70) {
		document.querySelector('.moveTop').style.opacity="1";
		document.querySelector('.moveTop').style.transition="opacity linear 0.4s";
	}
	else {
		document.querySelector('.moveTop').style.opacity="0";
		document.querySelector('.moveTop').style.transition="opacity linear 0.4s";
	}
}