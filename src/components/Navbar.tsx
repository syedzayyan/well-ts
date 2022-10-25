import github from "../assets/github.png"
import About from "./About"

export default function Navbar() {
    

    return (
        <header>
            <main id="navbar-outer">
                <nav>
                    <h1>
                        Well Plate/Mircroplate Layout Maker
                    </h1>
                </nav>
                <nav>
                    <li>
                    <a className="nav-links" href="https://github.com/syedzayyan">
                        <img title="Github Repo Link" alt = "link to the repo" src={github} height={40} width={40} />
                    </a>                        
                    </li>
                    <li>
                        <About />
                    </li>
                </nav>
            </main>
            <style>{`
                header{
                    width: 100%;
                }
                #navbar-outer{
                    display: flex;
                    flex-direction:row;
                    justify-content: space-between;
                    align-items: center;
                    max-width : var(--max-layout-width);
                    margin:auto;
                }
                #navbar-outer li {
                    list-style: none;
                    display: inline-block;
                    top:0;
                    bottom:0;
                    padding: 10px 10px;
                }
                #navbar-outer img{
                    padding:0;
                    top:0;
                    bottom:0;
                }
                .nav-links{
                    text-decoration: none;
                    padding:5px;
                    border-radius:5px;
                    transition:100ms;
                }
                @media only screen and (max-width:1000px) {
                    #navbar-outer{
                      max-width: var(--normal-layout-width);
                    }
                  }
                  @media only screen and (max-width:600px) {
                    #navbar-outer{
                      max-width: var(--medium-layout-width);
                    }
                  }
                  @media only screen and (max-width:100px) {
                    #navbar-outer{
                      max-width: var(--small-layout-width);
                    }
                  }
            `}</style>
        </header>
    )
}