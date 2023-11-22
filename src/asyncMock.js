const products = [
  {
    id: '1',
    name:'Iphone 12',
    price: 3000,
    category: 'celular',
    img:'https://imgs.search.brave.com/22ZUmsqOvDnNuCyneNQQo2_xU_gYVd7K1zb_jFxJH2U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFTT3lnVWpwVUwu/anBn',
    stock:25,
    description: 'Descripcion de Iphone 12'
  },
  {
    id: '2',
    name:'Tablet Gen',
    price: 5400,
    category: 'tablet',
    img:'https://imgs.search.brave.com/EVL3YXlX8Rf4IHCO0QGSugWYF4ft3MjiQA8sCpDp0Q4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxY2FvYVdCcnNM/LmpwZw',
    stock:31,
    description: 'Descripcion Tablet 8G'
  },
  {
    id: '3',
    name:'Samsung A4',
    price: 3400,
    category: 'celular',
    img:'https://imgs.search.brave.com/ch7YQlS4OKCDgZy_E1MQ4DXkbPqYdHkdeOmqUg0TMvc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFiSXY0Q01SQ0wu/anBn',
    stock:8,
    description: 'Descripcion SamsungA4'
  }
]

export const getProducts = () => {
  return new Promise ((resolve)=> {
    setTimeout( ()=> {
      resolve(products)
    }, 500 )

  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) =>{
    setTimeout(()=> {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  }) 
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) =>{
    setTimeout(()=> {
      const filteredProducts = categoryId
      ? products.filter((prod) => prod.category === categoryId)
      : products;

    resolve(filteredProducts);
    }, 500)
  }) 
}


