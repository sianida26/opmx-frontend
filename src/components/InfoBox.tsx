import { PropsWithChildren, useState } from "react";

type Props = {
};

export default function InfoBox({ children }: PropsWithChildren<Props>) {
  return (
    <div className="w-full bg-primary-50 border border-primary-900 flex flex-col md:flex-row rounded-md">
        {/* icon container */}
        <div className="bg-primary-900 py-2 md:px-2 flex-center rounded-t-md md:rounded-t-none md:rounded-l-md">
            <i className="bi bi-info-circle-fill text-white"></i>
        </div>
        <div className='px-2 py-4 md:px-4 text-xs'>
            { children }
        </div>
    </div>
  )
}
