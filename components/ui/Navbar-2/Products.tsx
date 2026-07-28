import React from 'react'

export default function Products() {
  return (
    <div className="grid grid-cols-6 gap-7 px-8 py-8">

      {/* Column 1 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Page
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Product Thumbnail</li>
          <li className="link-line-small cursor-pointer">Product Image</li>
          <li className="link-line-small cursor-pointer">Product Slider</li>
          <li className="link-line-small cursor-pointer">Product Accordion</li>
          <li className="link-line-small cursor-pointer">Product Sticky</li>
          <li className="link-line-small cursor-pointer">Product Vertical Tab</li>
        </ul>
      </div>


      {/* Column 2 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Page
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Product Sidebar Left</li>
          <li className="link-line-small cursor-pointer">Product Sidebar Right</li>
          <li className="link-line-small cursor-pointer">Product No Sidebar</li>
          <li className="link-line-small cursor-pointer">Product Column Thumbnail</li>
          <li className="link-line-small cursor-pointer">Product Thumbnail Image Outside</li>
        </ul>
      </div>


      {/* Column 3 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Variants Style
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Variant Rectangle</li>
          <li className="link-line-small cursor-pointer">Variant Circle</li>
          <li className="link-line-small cursor-pointer">Variant Image Swatch</li>
          <li className="link-line-small cursor-pointer">Variant Color</li>
          <li className="link-line-small cursor-pointer">Variant Radio Button</li>
          <li className="link-line-small cursor-pointer">Variant Dropdown</li>
        </ul>
      </div>


      {/* Column 4 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Features
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Product Simple</li>
          <li className="link-line-small cursor-pointer">Product Classified</li>
          <li className="link-line-small cursor-pointer">Size Chart</li>
          <li className="link-line-small cursor-pointer">Delivery & Return</li>
          <li className="link-line-small cursor-pointer">Product Review</li>
          <li className="link-line-small cursor-pointer">Ask an Expert</li>
        </ul>
      </div>


      {/* Column 5 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Features
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Bundle (Cross Sale)</li>
          <li className="link-line-small cursor-pointer">Hot Stock Progress</li>
          <li className="link-line-small cursor-pointer">Out Stock</li>
          <li className="link-line-small cursor-pointer">Sale Countdown</li>
          <li className="link-line-small cursor-pointer">Product Zoom</li>
        </ul>
      </div>


      {/* Column 6 */}
      <div>
        <h4 className="font-semibold text-lg">
          Product Features
        </h4>

        <div
          className="mt-2 mb-5 h-[2px] w-10"
          style={{ background: "var(--main-color)" }}
        />

        <ul className="space-y-3 text-gray-600">
          <li className="link-line-small cursor-pointer">Sticky Checkout</li>
          <li className="link-line-small cursor-pointer">Secure Checkout</li>
          <li className="link-line-small cursor-pointer">Social Share</li>
          <li className="link-line-small cursor-pointer">Related Products</li>
          <li className="link-line-small cursor-pointer">Wishlist & Compare</li>
        </ul>
      </div>

    </div>
  );
}