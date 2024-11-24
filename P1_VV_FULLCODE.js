const products = [
    {name: "A", price: 100.00, quantity: -20},
    {name: "B", price: 150.00, quantity: 5},
    {name: "C", price: 200.00, quantity: 5}
  ];
  
const discount = 10;

function calculateInvoice(products, discount) {
    let i = 0;

    let resultado = 0;

    do {
        if(products[i].price <= 0 || products[i].quantity <= 0 ){
            return(`InvalidProductException`);
        } else {
            const productTotal = products[i].price * products[i].quantity;
            resultado += productTotal;
            i++;
        };
    } while (i < products.length);

    //console.log(`valor total = ` + resultado);

    const discountAmount = (discount / 100) * resultado;
    //console.log(`valor do desconto = ` + discountAmount);

    if(resultado > 1000){
        //console.log(`resultado antes do desconto adicional = ` + resultado);

        const DiscounTotal = resultado - discountAmount;
        //console.log(`valor - desconto = ` + DiscounTotal);

        const total = DiscounTotal - 100;
        //console.log(`resultado depois do desconto adicional = ` + total);

        return total.toFixed(2);
    } else {
        //console.log(`sem aplicação de desconto adicional`);
        //console.log(`resultado total sem desconto = ` + resultado);
        const total = resultado - discountAmount;
        return total.toFixed(2);
    }
}
  
const total = calculateInvoice(products, discount);
console.log(total);


