import { Prisma, OrderStatus, PaymentStatus } from "../../src/generated/prisma/client";

export interface OrderSeedType {
  userEmail: string;
  orderStatus: OrderStatus;
  totalAmount: Prisma.Decimal;
  orderItems: OrderItemSeedType[];
  shippingAddress: ShippingAddressSeedType;
  payments: PaymentSeedType[];
}

export interface OrderItemSeedType {
  sku: string;
  quantity: number;
  designUrl?: string;
  title: string;
  description: string;
  price: Prisma.Decimal;
  size: string;
  color: string;
}

export interface PaymentSeedType {
  provider: string;
  providerTransactionId?: string;
  amount: Prisma.Decimal;
  method: string;
  paymentStatus: PaymentStatus;
}

export interface ShippingAddressSeedType {
  fullName: string;
  phone: string;
  city: string;
  landmark: string;
  description: string;
}

export const AllOrderData: OrderSeedType[] = [
  {
    userEmail: "amiacharger@gmail.com",
    orderStatus: OrderStatus.DELIVERED,
    totalAmount: new Prisma.Decimal(2500.00),
    orderItems: [
      {
        sku: "TS-BLK-M-002",
        quantity: 2,
        designUrl: "https://picsum.photos/536/354",
        title: "Stylish Tshirt for Men",
        description: "a male wear tshirt for people who want to look stylish",
        price: new Prisma.Decimal(100.00),
        size: "L",
        color: "White"
      },
    ],
    shippingAddress: {
      fullName: "Rojan Devkota",
      phone: "90283459387493",
      city: "kathmandu",
      landmark: "greencity",
      description: "behind greencity",
    },
    payments: [{
      provider: "Khalti",
      providerTransactionId: "KHALTI-TXN-987654321",
      amount: new Prisma.Decimal(2500.00),
      method: "Digital Wallet",
      paymentStatus: PaymentStatus.COMPLETED,
    }]
  },
  {
    userEmail: "angesh@gmail.com",
    orderStatus: OrderStatus.PROCESSING,
    totalAmount: new Prisma.Decimal(2800.00),
    orderItems: [
      {
        sku: "HD-WHT-M-002",
        quantity: 1,
        designUrl: "https://picsum.photos/id/237/536/354",
        title: "Stylish Hoodie for Men",
        description: "a male wear Hoodie for people who want to look stylish",
        price: new Prisma.Decimal(100.00),
        size: "L",
        color: "Red"
      },
    ],
    shippingAddress: {
      fullName: "Angesh Sharma",
      phone: "902834343459387",
      city: "kathmandu",
      landmark: "greencity",
      description: "near greencity",
    },
    payments: [{
      provider: "Esewa",
      providerTransactionId: "ESEWA-TXN-123456789",
      amount: new Prisma.Decimal(2800.00),
      method: "Digital Wallet",
      paymentStatus: PaymentStatus.COMPLETED,
    }],
  },
];