"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavigationSection = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <div className="mt-12">
      <div className="container">
        <div className="overflow-x-auto">
          <div className="flex items-center gap-4 lg:w-auto w-max">
            <Link
              href="#"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#") && "border-b-2"
              )}
            >
              اهلا بكم في عيادات النهدي كير
            </Link>
            <Link
              href="#nahdicare-departments"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#nahdicare-departments") && "border-b-2"
              )}
            >
              أقسام النهدي
            </Link>
            <Link
              href="#health-package"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#health-package") && "border-b-2"
              )}
            >
              باقات الرعاية الصحية
            </Link>
            <Link
              href="#download-app-content"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#download-app-content") && "border-b-2"
              )}
            >
              حمل التطبيق لحجز اسرع
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
