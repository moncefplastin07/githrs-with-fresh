

/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

export default function RegionsList({ listOfRegions, pushAlert }:any) {


  return (
    <div
      className={tw`dark:bg-black dark:text-white  flex flex-col items-center ring-inset min-h-screen py-2`}
    >
     
      <div
        className={tw`flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full`}
      >
        {listOfRegions?.length
          ? (
            <ul
              className={tw`text-left grid grid-cols-4 xs:grid-cols-2 xs:text-center gap-4`}
            >
              {
              listOfRegions.map((country:any) => {
                return (
                  country.slug !== "israel" ? 
                  <li key={country.country}
                  className={tw`border-green-500 duration-200 ease-in-out	hover:border-l-4 hover:pl-2`}
                >
                   <a title={country.country} href={country.slug}>{country.country}</a>     
                </li> : ( <li
                      key={country.country}
                      className={tw`line-through text-red-800 bg-red-200 border-red-500 border-green-500 duration-200 ease-in-out	hover:border-l-4 hover:pl-2`}
                    >
                        <a
                          title="A country that encourages terrorism"
                          
                        >
                          {country.country}
                        </a>
                      
                    </li>))
              })
            }
            </ul>
          )
          : "لا توجد احصائيات"}
      </div>
    </div>
  );
}
