// 1-آیا موجودی کافیه برای ثبت سفارش.اگر کافی بود بنویس کافیه
// 2-برود برای پرداخت اگه میلغ را درست زد بگه موفق3-ایمیل تایید را ارسال کنه3-سفارش با موفقیت تکمیل شد.
//با async await
// const productList = [
//     { id: 1, name: "laptop", price: 1000000, number: 5 },
//     { id: 2, name: 'tv', price: 2000000, number: 2 },
//     { id: 3, name: 'mobile', price: 3000000, number: 3 },
//     { id: 4, name: "tablet", price: 4000000, number: 4 },
//     { id: 5, name: 'apple', price: 5000000, number: 6 },
//     { id: 6, name: "notebook", price: 6000000, number: 7 },
// ]
// function getProductName(name) {
//     return new Promise((resolve, reject) => {
//         const product = productList.find(item => item.name == name)
//         if (product) {
//             console.log('product:', product)
//             if (product.number > 0) {
//                 console.log(`productprice: ${product.price} toman`)
//                 resolve(product)
//             } else {
//                 reject('موجودی کالا کافی نیست.')
//             }
//         } else {
//             console.log('کالا اشتباه است')
//             reject('کالا اشتباه است')
//         }
//     })

// }

// async function pay(price, name) {
//     try {
//         const product = await getProductName(name)
//         if (product.price === price) {
//             console.log('پرداخت موفقیت آمیز. ایمیل خود را وارد کنید')
//         } else {
//             console.log("مبلغ پرداختی مغایرت دارد. مجددا مبلغ را وارد کنید")
//         }
//         return product
//     } catch {
//         console.log('اطلاعات را مجددا وارد کنید')
//     }
// }
// pay(1000000, 'laptop')

// async function emailCustomer(email , name) {
//     const product = await getProductName(name)
//     try {
//         console.log(`ایمیل تایید به ${email} ارسال شد`)
//         console.log('چاپ سفارش با موفقیت انجام شد')
//     } catch {
//         console.log('ایمیل اشتباه است.')
//     }
// }

// async function emailCustomer(email , name) {
//     const product = await getProductName(name)
//     if (email) {
//         console.log(`ایمیل تایید به ${email} ارسال شد`)
//         console.log('چاپ سفارش با موفقیت انجام شد')
//     } else {
//         console.log('ایمیل اشتباه است.')
//     }
// }
// emailCustomer("m@gmail.com" , 'laptop')
// emailCustomer('' , 'tablet')
//===============================================================================================================
// const productList = [
//     { id: 1, name: "laptop", price: 1000000, number: 5 },
//     { id: 2, name: 'tv', price: 2000000, number: 3 },
//     { id: 3, name: 'mobile', price: 3000000, number: 3 },
//     { id: 4, name: "tablet", price: 4000000, number: 4 },
//     { id: 5, name: 'apple', price: 5000000, number: 6 },
//     { id: 6, name: "notebook", price: 6000000, number: 7 },
// ]
// console.log('نام محصول را وارد کنید')
// getName("tv")
// function getName(name) {
//     function getProductName() {
//         return new Promise((resolve, reject) => {
//             const product = productList.find(item => item.name == name)
//             if (product) {
//                 console.log('******', name)
//                 console.log('product:', product)
//                 if (product.number > 0) {
//                     console.log(`productprice: ${product.price} toman`)
//                     product.number--
//                     console.log(`تعداد محصول باقیمانده ${product.number} عدد`)
//                     resolve(product)
//                 } else {
//                     reject('موجودی کالا کافی نیست.')
//                 }
//             } else {
//                 console.log('کالا اشتباه است')
//                 reject('کالا اشتباه است')
//             }
//         })
//     }

//     async function pay(price) {
//         try {
//             const product = await getProductName()
//             if (product.price === price) {
//                 console.log('پرداخت موفقیت آمیز. ایمیل خود را وارد کنید')
//             } else {
//                 console.log("مبلغ پرداختی مغایرت دارد. مجددا مبلغ را وارد کنید")
//             }
//             return product
//         } catch {
//             console.log('اطلاعات را مجددا وارد کنید')
//         }
//     }
//     pay(2000000)

//     // async function emailCustomer(email , name) {
//     //     const product = await getProductName(name)
//     //     try {
//     //         console.log(`ایمیل تایید به ${email} ارسال شد`)
//     //         console.log('چاپ سفارش با موفقیت انجام شد')
//     //     } catch {
//     //         console.log('ایمیل اشتباه است.')
//     //     }
//     // }

//     async function emailCustomer(email) {
//         const product = await getProductName()
//         if (email) {
//             console.log(`ایمیل تایید به ${email} ارسال شد`)
//             console.log('چاپ سفارش با موفقیت انجام شد')
//         } else {
//             console.log('ایمیل اشتباه است.')
//         }
//     }
//     emailCustomer("m@gmail.com")
// }
//======================================================================================================================
const productList = [
    { id: 1, name: "laptop", price: 1000000, number: 5 },
    { id: 2, name: 'tv', price: 2000000, number: 3 },
    { id: 3, name: 'mobile', price: 3000000, number: 3 },
    { id: 4, name: "tablet", price: 4000000, number: 4 },
    { id: 5, name: 'apple', price: 5000000, number: 6 },
    { id: 6, name: "notebook", price: 6000000, number: 7 },
]
console.log('نام محصول را وارد کنید')

function getName(name) {
    function getProductName() {
        return new Promise((resolve, reject) => {
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
            } else {
                console.log('کالا اشتباه است')
                reject('کالا اشتباه است')
            }
        })
    }

    async function pay(price) {
        try {
            const product = await getProductName()
            if (product.price === price) {
                console.log('پرداخت موفقیت آمیز. ایمیل خود را وارد کنید')
            } else {
                console.log("مبلغ پرداختی مغایرت دارد. مجددا مبلغ را وارد کنید")
            }
            return product
        } catch {
            console.log('اطلاعات را مجددا وارد کنید')
        }
    }
    pay(2000000)

    // async function emailCustomer(email , name) {
    //     const product = await getProductName(name)
    //     try {
    //         console.log(`ایمیل تایید به ${email} ارسال شد`)
    //         console.log('چاپ سفارش با موفقیت انجام شد')
    //     } catch {
    //         console.log('ایمیل اشتباه است.')
    //     }
    // }

    async function emailCustomer(email) {
        const product = await getProductName()
        if (email) {
            console.log(`ایمیل تایید به ${email} ارسال شد`)
            console.log('چاپ سفارش با موفقیت انجام شد')
        } else {
            console.log('ایمیل اشتباه است.')
        }
    }
    emailCustomer("m@gmail.com")
}
getName("tv")