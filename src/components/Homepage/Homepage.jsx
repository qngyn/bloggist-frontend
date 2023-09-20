import { FaBookOpen } from "react-icons/fa";
import Register from "../Users/Register";
import PublicPosts from "../Posts/PublicPosts";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <section className="relative bg-white overflow-hidden">
          <div className="relative py-20 xl:pt-16 xl:pb-24">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
                  <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 font-medium uppercase rounded-9xl">
                    Bloggist
                  </span>
                  <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-coolGray-900 font-bold tracking-tight">
                      Explore the insights around you
                  </h1>
                  <ul>
                      <li className="mb-6 flex items-center">
                        <p className="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">
                          Update the latest news and ideas in Technology and Innovation
                        </p>
                      </li>
                      <li className="mb-6 flex items-center">
                        <p className="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">
                          Perfect for a blog focused on cutting-edge technology and trends
                        </p>
                      </li>
                      <li className="flex items-center">

                        <p className="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">
                        Great if your blog is about sharing innovative and
                        accessible recipes.
                        </p>
                      </li>
                  </ul>
                  <Link
                  to=""
                  className="mb-4 mt-9 p-4 inline-block py-3 px-7 w-full leading-6 text-green-50 font-medium text-center bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 flex items-center justify-center animate-pulse"
                  > 
                  <FaBookOpen className="mr-2" />
                    Learn more
                  </Link>
                </div>
                
                <Register />
              </div>
            </div>
          </div>
      </section>
        
      <PublicPosts />
    </div>
)
}

export default Homepage;