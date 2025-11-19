const productList = [
    { id: 1, name: "laptop", price: 1000000, number: 5 },
    { id: 2, name: 'tv', price: 2000000, number: 3 },
    { id: 3, name: 'mobile', price: 3000000, number: 3 },
    { id: 4, name: "tablet", price: 4000000, number: 4 },
    { id: 5, name: 'apple', price: 5000000, number: 6 },
    { id: 6, name: "notebook", price: 6000000, number: 7 },
]
console.log('نام محصول را وارد کنید')

// remove nested function

function getProductName(name) {
    return new Promise((resolve, reject) => {
        // settimeout for simulate asynchronous 
        setTimeout(() => {
            const product = productList.find(item => item.name == name)
            if (product) {
                console.log('******', name)
                console.log('product:', product)
                if (product.number > 0) {
                    console.log(`productprice: ${product.price} toman`)
                    product.number--
                    console.log(`تعداد محصول باقیمانده ${product.number} عدد`)
                    resolve(product)
                } else {
                    reject('موجودی کالا کافی نیست.')
                }
            }
            else {
                reject('کالا اشتباه است')
            }
        }, 2000);
    })

}

function pay(product, price) {
    //  settimeout and promise for handel it 
    return new Promise((resolve, reject) => {
        try {

            setTimeout(() => {

                if (product.price === price) {
                    console.log('پرداخت موفقیت آمیز. ایمیل خود را وارد کنید')
                    resolve()
                } else {
                    console.log("مبلغ پرداختی مغایرت دارد. مجددا مبلغ را وارد کنید")
                    reject()
                }
            }, 3000)
            return product
        } catch {
            console.log('اطلاعات را مجددا وارد کنید')
            reject()
        }
    })
}

function emailCustomer(email) {
    //  settimeout and promise for handel it 
    return new Promise((resolve, reject) => {
        if (email) {
            console.log(`ایمیل تایید به ${email} ارسال شد`)
            console.log('چاپ سفارش با موفقیت انجام شد')
            resolve()
        } else {
            console.log('ایمیل اشتباه است.')
            reject()
        }
    })
}

async function order(productName, email) {
    try {
        const product = await getProductName(productName);
        const payment = await pay(product, 2000000);
        const confirmation = await emailCustomer(email);


        return ' سفارش با موفقیت تکمیل شد!';
    } catch (error) {
        throw new Error(`خطا در سفارش: ${error}`);
    }
}




order("tv", "m@gmail.com")