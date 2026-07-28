export default function DesTab() {
  return (
    <div className="space-y-2 font-montserrat px-2">

      {/* Description */}
      <div>
        <p className="leading-5 text-[#777] -mt-5">
          The Model is wearing a white blouse from our stylist&apos;s collection.
          See the image for a mock-up of what the actual blouse would look
          like. It has text written on it in a black cursive language which
          looks great on a white color.
        </p>
      </div>

      {/* Fabric */}
      <div>
        <h4 className="mb-3 text-[16px] font-semibold text-[#222]">
          Fabric
        </h4>

        <p className="leading-5 text-[#777]">
          Art silk is manufactured using synthetic fibres like rayon. It is
          lightweight, soft on the skin, and provides excellent comfort during
          summer. The smooth texture and elegant finish make it a popular
          choice for stylish outfits.
        </p>
      </div>

      {/* Size & Fit */}
      <div>
        <h4 className="mb-2 text-[16px] font-semibold text-[#222]">
          Size &amp; Fit
        </h4>

        <p className="leading-8 text-[#777]">
          The model (height 5&apos;8&quot;) is wearing a size S.
        </p>
      </div>

      {/* Material & Care */}
      <div>
        <h4 className="mb-3 text-[16px] font-semibold text-[#222]">
          Material &amp; Care
        </h4>

        <ul className="space-y-3 text-[#777]">
          <li >
            Top Fabric: Pure Cotton
          </li>

          <li >
            Bottom Fabric: Pure Cotton
          </li>

          <li >
            Hand Wash Only
          </li>
        </ul>
      </div>

    </div>
  );
}