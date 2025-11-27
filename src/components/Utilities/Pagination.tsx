interface PaginationProps {
    page: number;
    lastPage: number;
    setPage: (page: number) => void;   
}


const Pagination=({page,lastPage,setPage}:PaginationProps) => {
    const scrollTop=() => {
        scrollTo({
            behavior: "smooth",
            top: 0,
        });
    }

    const handleNextPage=() => {
        setPage(page + 1);
        scrollTop();
    }

    const handlePrevPage=() => {
        setPage(page - 1);
        scrollTop();
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="bg-color-accent px-4 py-2 rounded hover:bg-indigo-600 transition">Prev</button> 
            }

            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="bg-color-accent px-4 py-2 rounded hover:bg-indigo-600 transition">Next</button> 
            }
        </div>
    )
}

export default Pagination;
