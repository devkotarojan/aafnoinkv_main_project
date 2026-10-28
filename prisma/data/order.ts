import { Prisma, OrderStatus, PaymentStatus } from "../../src/generated/prisma/client";

export interface OrderItemSeedType {
  sku: string; // Used to fetch variantId and product details
  quantity: number;
  designUrl?: string;
  // Snapshots (can be overridden, or dynamically pulled from the product in seed.ts)
  title?: string;
  description?: string;
  price?: Prisma.Decimal;
  size?: string;
  color?: string;
}

export interface ShippingAddressSeedType {
  fullName: string;
  phone: string;
  city: string;
  landmark: string;
  description: string;
}

export interface PaymentSeedType {
  provider: string;
  providerTransactionId: string;
  amount: Prisma.Decimal;
  method: string;
  paymentStatus: PaymentStatus;
}

export interface OrderSeedType {
  userEmail: string; // 👈 Used to lookup userId via userMap
  orderStatus: OrderStatus;
  totalAmount: Prisma.Decimal;
  items: OrderItemSeedType[];
  shippingAddress: ShippingAddressSeedType;
  payment: PaymentSeedType;
}

export const AllOrderData: OrderSeedType[] = [
  {
    userEmail: "amiacharger@gmail.com",
    orderStatus: OrderStatus.DELIVERED,
    totalAmount: new Prisma.Decimal(2500.00),
    items: [
      {
        sku: "TS-BLK-M-001",
        quantity: 2,
        designUrl: "https://picsum.photos/536/354",
      },
    ],
    shippingAddress: {
      fullName: "Rojan Devkota",
      phone: "90283459387493",
      city: "kathmandu",
      landmark: "greencity",
      description: "behind greencity",
    },
    payment: {
      provider: "Khalti",
      providerTransactionId: "KHALTI-TXN-987654321",
      amount: new Prisma.Decimal(2500.00),
      method: "Digital Wallet",
      paymentStatus: PaymentStatus.COMPLETED,
    },
  },
  {
    userEmail: "angesh@gmail.com",
    orderStatus: OrderStatus.PROCESSING,
    totalAmount: new Prisma.Decimal(2800.00),
    items: [
      {
        sku: "HD-GRY-M-001",
        quantity: 1,
        designUrl: "https://picsum.photos/id/237/536/354",
      },
    ],
    shippingAddress: {
      fullName: "Angesh Sharma",
      phone: "902834343459387",
      city: "kathmandu",
      landmark: "greencity",
      description: "near greencity",
    },
    payment: {
      provider: "Esewa",
      providerTransactionId: "ESEWA-TXN-123456789",
      amount: new Prisma.Decimal(2800.00),
      method: "Digital Wallet",
      paymentStatus: PaymentStatus.COMPLETED,
    },
  },
];