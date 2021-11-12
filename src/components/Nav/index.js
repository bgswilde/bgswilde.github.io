import React, { useEffect } from "react";

function Nav(props) {

    const {
        pages,
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {
        document.title = `Brian Wilde - ${currentPage.title}`
    }, [currentPage]);

    return(
        <header>
            <div className="heading">
                <h1>
                    BRIAN WILDE
                </h1>
                <h4>
                    full stack developer
                </h4>
            </div>
            <nav>
                <ul>
                    {pages.map((page) => (
                        <li
                            className={`${currentPage.title === page.title && "active-nav"}`}
                            key={page.title}
                        >
                            <span onClick={() => {setCurrentPage(page)}}>{page.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;