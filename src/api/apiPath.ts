export const APIPath = {
  register: '/api/members/register',
  login: '/api/members/login',
  getAllCategories: '/api/categories',
  makeProduct: '/api/products',
  getProduct: '/api/products/:productsId',
  getAllProducts: '/api/products?page=:page&size=:size&sort=:sort&categoryId=:categoryId',
  getOption: '/api/products/:productId',
  putWish: '/api/wishes',
  deleteWish: '/api/wishes/:wishId',
  getAllWishes: '/api/wishes?page=:page&size=:size&sort=:sort',
  order: '/api/orders',
};

export const getDynamicPath = {
  getProduct: (productsId: string) => APIPath.getProduct.replace(':productsId', productsId),
};

export const getBackendAPI = () => {
  const backend = localStorage.getItem('backend');
  let url;

  switch (backend) {
    case '김해경':
      url = 'http://52.78.246.142:8080';
      break;
    case '박서현':
      url = 'http://43.202.61.165:8080';
      break;
    case '윤정훈':
      url = 'http://52.78.6.254:8080';
      break;
    case '이은경':
      url = 'http://3.38.99.100:8080';
      break;
    case '이택':
      url = 'https://api.example.com';
      break;
    default:
      url = 'https://api.example.com';
      break;
  }

  return url;
};
