import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Truck } from 'lucide-react';
export default function DeliveryModal() {
  return <>
    <Dialog>
    <DialogTrigger className="flex font-montserrat items-center gap-2 text-[#222] transition cursor-pointer">
      <Truck className="w-5 h-5" />
      <span>Delivery & Return</span>
    </DialogTrigger>
<DialogContent className="sm:max-w-5xl max-h-[85vh] overflow-y-auto">
  <DialogHeader>
    <DialogTitle className="text-2xl font-semibold">
      Delivery & Return
    </DialogTitle>
  </DialogHeader>

  <div className="space-y-5 text-[#777] leading-5 font-montserrat text-[14px]">

    <p>
      Shipping and Returns are integral parts of your shopping experience, and
      we aim to make them as smooth as possible. We prioritize efficient
      shipping, striving to deliver your orders promptly within the estimated
      delivery window, typically ranging from <strong>5 to 7 days</strong>. We
      understand that sometimes your purchase may not meet your expectations, so
      we offer a straightforward return policy. If you find yourself
      unsatisfied with your order, eligible items can be returned within
      <strong> 30 days </strong>
      of purchase, ensuring you have ample time to make a decision. Our
      commitment is to ensure your satisfaction and convenience throughout your
      shopping journey with us, and We&apos;re here to assist you every step of the
      way.
    </p>

    <div>
      <h3 className="text-lg font-semibold text-[#777] mb-3">
        Our Shipping Commitment:
      </h3>

      <ul className=" space-y-2 text-[#777] leading-5 font-montserrat text-[14px]">
        <li>Timely and reliable delivery within 5–7 days.</li>
        <li>Real-time tracking for your orders.</li>
        <li>
          Exceptional packaging to ensure your items arrive in perfect
          condition.
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-[#777] mb-3">
        Our Hassle-Free Returns:
      </h3>

      <ul className=" space-y-2">
        <li>Eligible items can be returned within 30 days.</li>
        <li>Easy return initiation through our website.</li>
        <li>
          Prompt processing of returns for a hassle-free experience.
        </li>
      </ul>
    </div>

    <p>
      We understand that your shopping needs may vary, and we are here to
      accommodate them while providing exceptional service.
    </p>

  </div>
</DialogContent>
</Dialog>
  </>
}
