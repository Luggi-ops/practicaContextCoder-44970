const products = [
    {
      id: 1,
      name: "Anteojos",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/anteojos.jpg",
      price: "10000",
      stock: 5,
      rate: 5
    },
    {
      id: 2,
      name: "Auriculares",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/auriculares.jpg",
      price: "10000",
      stock: 10,
      rate: 5
    },
    {
      id: 3,
      name: "Botella",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/botella.jpg",
      price: "10000",
      stock: 20,
      rate: 5
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/smartwatch-negro.jpg",
      price: "10000",
      stock: 7,
      rate: 5
    },
    {
      id: 5,
      name: "Smartwatch",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/smartwatch-rojo.jpg",
      price: "10000",
      stock: 3,
      rate: 5
    },
    {
      id: 6,
      name: "Alexa",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "/img/products/alexa.jpg",
      price: "10000",
      stock: 0,
      rate: 5
    }
]

export const getData = (id) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id){
              const [product] = products.filter(prod => prod.id == id);
              resolve(product)
            }else{
              resolve(products)
            }

        }, 2000)
    }
        
    )
}