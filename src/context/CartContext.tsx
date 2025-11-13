import React, { createContext, useContext, useMemo, useState } from "react"
import type { Product } from "../components/ProductCard"

type CartItem = Product & {quantity: number}

type CartContextType = {
    items: CartItem[]
    addItem: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvaider({children}: {children: React.ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([])
    const addItem = (product: Product) => {
        setItems(prev => {
            const existing = prev.find(p => p.id === product.id)
            if (existing) {
                return prev.map(p => (p.id === product.id ? {...p, quantity: p.quantity + 1} : p))
            }
            return [...prev, {...product, quantity:1 }]
        })
    }

    const value = useMemo(() => ({items, addItem}), [items])
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('ЮсКарт используется без провайдера')
    return ctx
}