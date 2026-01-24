"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, TruckIcon, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  id: number | string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number | string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

interface OrderCardProps {
  order: Order;
}

const statusConfig = {
  processing: {
    label: "Processing",
    icon: Clock,
    color: "bg-gold-muted text-charcoal-dark",
  },
  shipped: {
    label: "Shipped",
    icon: TruckIcon,
    color: "bg-gold-primary text-emerald-dark",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle,
    color: "bg-emerald-primary text-cream-primary",
  },
  cancelled: {
    label: "Cancelled",
    icon: Package,
    color: "bg-gray-soft text-white",
  },
};

const OrderCard = ({ order }: OrderCardProps) => {
  const status = statusConfig[order.status];
  const StatusIcon = status.icon;

  return (
    <div className="group bg-cream-white border border-beige-warm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 md:p-6 border-b border-beige-warm bg-beige-pearl/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-semibold text-charcoal-dark tracking-wide">
                Order #{order.orderNumber}
              </h3>
              <Badge className={status.color}>
                <StatusIcon className="h-3 w-3 mr-1" />
                {status.label}
              </Badge>
            </div>
            <p className="text-xs text-gray-soft">
              Placed on{" "}
              {new Date(order.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-lg font-semibold text-gold-primary">
              ${order.total.toFixed(2)}
            </span>
            <span className="text-xs text-gray-soft">
              {order.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
              item(s)
            </span>
          </div>
        </div>

        {order.trackingNumber && (
          <div className="mt-3 pt-3 border-t border-beige-warm">
            <p className="text-xs text-gray-soft">
              Tracking:{" "}
              <span className="text-charcoal-dark font-mono">
                {order.trackingNumber}
              </span>
            </p>
            {order.estimatedDelivery && (
              <p className="text-xs text-gray-soft mt-1">
                Estimated delivery:{" "}
                {new Date(order.estimatedDelivery).toLocaleDateString()}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="p-4 md:p-6">
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-16 h-16 bg-beige-pearl rounded-lg overflow-hidden flex-shrink-0">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-soft">
                    <Package className="h-6 w-6" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-charcoal-dark truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-soft mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-gold-primary">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-beige-warm space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-soft">Subtotal</span>
            <span className="text-charcoal-dark">
              ${order.subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-soft">Shipping</span>
            <span className="text-charcoal-dark">
              {order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-sm font-semibold pt-2 border-t border-beige-warm">
            <span className="text-charcoal-dark">Total</span>
            <span className="text-gold-primary">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={`/account/orders/${order.id}`}>View Details</Link>
        </Button>

        {order.status === "delivered" && (
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gold-primary"
          >
            Reorder
          </Button>
        )}

        {order.status === "shipped" && order.trackingNumber && (
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gold-primary"
            asChild
          >
            <a
              href={`https://track.example.com/${order.trackingNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Track Order
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
