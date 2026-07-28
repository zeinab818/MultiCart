import React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";

export default function Features() {
  return (

      <div className="grid grid-cols-6 gap-10 px-6 py-6 ">

        {/* Column 1 */}
        <div className="space-y-10">
          <div>
            <h4 className="font-semibold text-lg">
              Invoice Template
            </h4>

            <div
              className="mt-2 mb-5 h-[2px] w-12"
              style={{ background: "var(--main-color)" }}
            />

            <ul className="space-y-3 text-gray-600">
              <li className="link-line-small ">Invoice 1</li>
              <li className="link-line-small ">Invoice 2</li>
              <li className="link-line-small ">Invoice 3</li>
              <li className="link-line-small ">Invoice 4</li>
              <li className="link-line-small ">Invoice 5</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Elements
            </h4>

            <div
              className="mt-2 mb-5 h-[2px] w-12"
              style={{ background: "var(--main-color)" }}
            />

            <ul className=" text-gray-600 flex gap-2">
             <li className="link-line-small  flex items-center gap-2">
                Elements Page
                <i className="fa fa-bolt text-xs text-(--main-color)"></i>
                </li>
                            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg">
            Email Template
          </h4>

          <div
            className="mt-2 mb-5 h-[2px] w-12"
            style={{ background: "var(--main-color)" }}
          />

          <ul className="space-y-3 text-gray-600">
            <li className="link-line-small ">Welcome</li>
            <li className="link-line-small ">Announcement</li>
            <li className="link-line-small ">Abandonment</li>
            <li className="link-line-small ">Offer</li>
            <li className="link-line-small ">Offer 2</li>
            <li className="link-line-small ">Review</li>
            <li className="link-line-small ">Featured Product</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg">
            Email Template
          </h4>

          <div
            className="mt-2 mb-5 h-[2px] w-12"
            style={{ background: "var(--main-color)" }}
          />

          <ul className="space-y-3 text-gray-600">
            <li className="link-line-small ">Black Friday</li>
            <li className="link-line-small ">Christmas</li>
            <li className="link-line-small ">Cyber Monday</li>
            <li className="link-line-small ">Flash Sale</li>
            <li className="link-line-small ">Order Success</li>
            <li className="link-line-small ">Order Success 2</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-10">
          <div>
            <h4 className="font-semibold text-lg">
              Cookie Bar
            </h4>

            <div
              className="mt-2 mb-5 h-[2px] w-12"
              style={{ background: "var(--main-color)" }}
            />

            <ul className="space-y-3 text-gray-600">
              <li className="link-line-small  gap-2">Bottom     <i className="fa fa-bolt text-xs text-(--main-color)"></i></li>
              <li className="link-line-small ">Bottom Left</li>
              <li className="link-line-small ">Bottom Right</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Search
            </h4>

            <div
              className="mt-2 mb-5 h-[2px] w-12"
              style={{ background: "var(--main-color)" }}
            />

            <ul className="space-y-3 text-gray-600">
              <li className="link-line-small ">
                Ajax Search
              </li>
            </ul>
          </div>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold text-lg">
            Modal
          </h4>

          <div
            className="mt-2 mb-5 h-[2px] w-12"
            style={{ background: "var(--main-color)" }}
          />

          <ul className="space-y-3 text-gray-600">
            <li className="link-line-small ">Newsletter</li>
            <li className="link-line-small ">Exit     <i className="fa fa-bolt text-xs text-(--main-color)"></i></li>
            <li className="link-line-small ">Christmas</li>
            <li className="link-line-small ">Black Friday</li>
            <li className="link-line-small ">Cyber Monday</li>
            <li className="link-line-small ">New Year</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h4 className="font-semibold text-lg">
            Add To Cart
          </h4>

          <div
            className="mt-2 mb-5 h-[2px] w-12"
            style={{ background: "var(--main-color)" }}
          />

          <ul className="space-y-3 text-gray-600">
            <li className="link-line-small ">Cart Modal Popup</li>
            <li className="link-line-small ">Cart Top</li>
            <li className="link-line-small ">Cart Bottom</li>
            <li className="link-line-small ">Cart Left</li>
            <li className="link-line-small ">Cart Right</li>
          </ul>
        </div>

      </div>

  );
}