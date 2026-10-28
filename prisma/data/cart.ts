export interface CartSeedType {
  userEmail: string;
  cartItems: {
    quantity: number;
    designUrl: string;
  }[];
}

export const AllCartData: CartSeedType[] = [
  {
    userEmail: "amiacharger@gmail.com",
    cartItems: [
      {
        quantity: 1,
        designUrl: "https://picsum.photos/536/354"
      },   
      {
        quantity: 2,
        designUrl: "https://picsum.photos/536/354"
      },  
      {
        quantity: 1,
        designUrl: "https://picsum.photos/536/354"
      }  
    ]
  },
  {
    userEmail: "angesh@gmail.com",
    cartItems: [
      {
        quantity: 1,
        designUrl: "https://picsum.photos/id/237/536/354"
      },   
      {
        quantity: 2,
        designUrl: "https://picsum.photos/id/237/536/354"
      },  
      {
        quantity: 1,
        designUrl: "https://picsum.photos/id/237/536/354"
      }  
    ]
  },
  {
    userEmail: "roshani@gmail.com",
    cartItems: [
      {
        quantity: 2,
        designUrl: "https://picsum.photos/seed/picsum/536/354"
      },   
      {
        quantity: 1,
        designUrl: "https://picsum.photos/seed/picsum/536/354"
      },  
      {
        quantity: 1,
        designUrl: "https://picsum.photos/seed/picsum/536/354"
      }  
    ]
  },
  {
    userEmail: "simran@gmail.com",
    cartItems: [
      {
        quantity: 1,
        designUrl: "https://picsum.photos/id/1084/536/354?grayscale"
      },   
      {
        quantity: 2,
        designUrl: "https://picsum.photos/id/1084/536/354?grayscale"
      },  
      {
        quantity: 1,
        designUrl: "https://picsum.photos/id/1084/536/354?grayscale"
      }  
    ]
  }
]