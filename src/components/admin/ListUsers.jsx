import React, { useState } from "react";
import { BlockUser } from "../../Api/adminApi/getRequest";

export default function ListUsers({ Item, index }) {
  const [active, setActive] = useState(Item.isActive);
  const blockAction = async (userId) => {
    await BlockUser(false, userId);
    setActive(false);
    //  dispatch(hideLoading())
  };
  const unblockAction = async (userId) => {
    await BlockUser(true, userId);
    setActive(true);
  };
  return (
    <>
      <tr className="b-white border-b-2 ">
        <td className="p-3 pt-7  text-md text-white">{index + 1}</td>
        <td className="p-3 pt-7 text-md text-white">{Item.name}</td>
        <td className="p-3 pt-7 text-md text-white">{Item.email}</td>

        {active ? (
          <button
            type="button"
            onClick={() => {
              blockAction(Item._id);
            }}
            className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Block
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              unblockAction(Item._id);
            }}
            className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Unblock
          </button>
        )}
      </tr>
      {/* <tr class="text-center whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        {index+1}
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            {Item.name}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">{Item.email}</div>
                                    </td>
                                    {active ? (
          <button
            type="button"
            onClick={() => {
              blockAction(Item._id);
            }}
            className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Block
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              unblockAction(Item._id);
            }}
            className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Unblock
          </button>
        )}
                                    
                                    
                                </tr>  */}

                                
    </>
  );
}
