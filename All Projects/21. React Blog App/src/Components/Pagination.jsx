import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {

    const {page, totalPages, handlePageChange} = useContext(AppContext);

    return (
        <div className="w-full flex justify-center items-center border-t-2 fixed bottom-0 bg-white">
            <div className="flex justify-between items-center w-11/12 max-w-[670px] py-2">
                <div className="flex gap-x-2">
                    { page > 1 &&
                        <button className="rounded-md border-2 px-4 py-1" onClick={() => handlePageChange(page - 1)}>Previous</button>
                    }
                    { page < totalPages &&
                        <button className="rounded-md border-2 px-4 py-1" onClick={() => handlePageChange(page + 1)}>Next</button>
                    }
                </div>
                
                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default Pagination;