import React from "react";

function Footer() {
    return (
        <footer className="footer text-center mt-auto mb-0">
            <div>
                <p>&copy; Copyright 2021, Brian Wilde</p>
                <ul>
                    <li>
                        <a href="tel:3162101197"><i class="fas fa-phone-square"></i></a>
                    </li>
                    <li>
                        <a href="mailto:bgswilde@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/bgswilde" target="_blank"><i class="fab fa-github-square"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/bgswilde" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
