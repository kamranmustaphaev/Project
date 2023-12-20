import { useSelector } from "react-redux"


export const useBasket = () => {
    const basket = useSelector(({ basket }) => basket.list)
    const products = useSelector(({ products }) => products.list)
    const basketProducts = basket.map(el => {
        const product = products.find(({ id }) => id === el.id)
        return { ...el, ...product }
    })
    return basketProducts
}