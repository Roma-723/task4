import logo from "../public/logo.png";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="max-w-450 mx-auto overflow-hidden">

      <div className="flex justify-between items-center px-5 md:px-15 py-8 bg-[#F5ECE3]">

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-30 w-15"
          src={logo}
          alt=""
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-15 text-xl font-serif"
        >
          <p>About</p>
          <p>Products</p>
          <p>Recipes</p>
        </motion.div>

        <p className="md:hidden text-3xl">≡</p>

        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block bg-black text-white px-10 py-3 text-xl rounded-md"
        >
          Contact
        </motion.button>

      </div>

      <div className="bg-[#F5ECE3] min-h-screen">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative px-5 md:px-20 pt-10 md:pt-0"
          >

            <p className="text-xl font-mono mb-5">
              Since 1984
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Fresh <br />
              Bakery <br />
              Every Day
            </h1>

            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="w-20 md:w-30 absolute right-0 md:right-20 top-1"
              src={img2}
              alt=""
            />

          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-[50%] w-full h-125 md:h-screen object-cover mt-10 md:mt-0"
            src={img1}
            alt=""
          />

        </div>

      </div>

      <div className="bg-[#F8F8F8] py-20">

        <div className="flex flex-col md:flex-row justify-around items-center gap-20">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute w-80 h-80 bg-[#F3BE73] rounded-full -z-10 top-20 left-5"></div>

            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-60 rounded-xl absolute top-0 -left-10"
              src={img4}
              alt=""
            />

            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-80 rounded-xl mt-35"
              src={img3}
              alt=""
            />

            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-10 right-0"
            >
              <img className="w-20" src={img5} alt="" />
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl px-5"
          >

            <p className="uppercase tracking-[5px] text-sm mb-5">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none mb-10">
              Baking Special <br />
              Moments
            </h1>

            <div className="flex gap-5 items-start">

              <div className="flex flex-col gap-5">

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ↑
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ↓
                </motion.button>

              </div>

              <div>

                <p className="mb-5">01</p>

                <h2 className="text-3xl font-semibold mb-5">
                  Last view back
                </h2>

                <p className="text-gray-400 leading-8 mb-10">
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way.
                </p>

                <div className="space-y-5 text-lg">
                  <p>On the skyline</p>
                  <p>Pitiful a rhetoric</p>
                  <p>On her way she</p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
      <div className="bg-[#F8F8F8] py-20 overflow-hidden">

        <p className="text-center uppercase tracking-[5px] text-sm mb-5">
          Our Features
        </p>

        <h1 className="text-center text-5xl md:text-7xl font-black mb-20 px-5">
          Baked With Love
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-5">

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-70 text-center md:text-left flex flex-col items-center md:items-start"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-16 h-16 md:w-20 md:h-20 mb-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12h19.5m-16.5 4.5h13.5M6 7.5h12"
              />
            </svg>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Fresh
            </h2>

            <p className="text-gray-400 leading-8">
              Nothing the copy said could convince
              her and so it didn’t take long.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-70 text-center md:text-left flex flex-col items-center md:items-start"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-16 h-16 md:w-20 md:h-20 mb-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3 4.5 9.75V21h15V9.75L12 3Z"
              />
            </svg>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Natural
            </h2>

            <p className="text-gray-400 leading-8">
              Copy Writers ambushed her, made her
              drunk with Longe and Parole.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-[#EAB46D] p-8 md:p-12 relative w-full max-w-[320px] text-center md:text-left mt-10"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-16 h-16 md:w-20 md:h-20 mb-6 mx-auto md:mx-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12c0-3 3-6 6-6h6c3 0 6 3 6 6s-3 6-6 6H9c-3 0-6-3-6-6Z"
              />
            </svg>

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Tasty
            </h2>

            <p className="text-gray-700 leading-8">
              And if she hasn’t been rewritten,
              then they are still using her.
            </p>

            <motion.img
              initial={{ rotate: -180, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-24 h-24 md:w-35 md:h-35 rounded-full object-cover absolute -top-10 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0"
              src={img3}
              alt=""
            />

          </motion.div>

        </div>
      </div>
      <div className="bg-[#F8F8F8] py-20 px-5 md:px-12 overflow-hidden">

        <p className="uppercase tracking-[5px] text-sm mb-5">
          Our Products
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-15">
          Baked Fresh <br />
          Every Morning
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative"
          >

            <img
              className="w-full h-75 md:h-full object-cover"
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 text-white">

              <p className="uppercase tracking-[4px] text-xs md:text-sm mb-3">
                Bakery
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-none mb-4">
                Homemade <br />
                Bread
              </h2>

              <p className="text-gray-300 max-w-62 text-sm md:text-base">
                Flows by their place and supplies it with
                the necessary regelialia.
              </p>

            </div>

            <p className="absolute bottom-5 md:bottom-10 right-5 md:right-10 text-white text-4xl md:text-5xl font-black">
              $9
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              className="w-full h-62 object-cover"
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="flex justify-between items-end mt-5">

              <div>
                <p className="uppercase tracking-[4px] text-xs md:text-sm mb-2">
                  Bakery
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  Bread
                </h2>
              </div>

              <p className="text-4xl md:text-5xl font-black">
                $5
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <img
              className="w-full h-62 object-cover"
              src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="flex justify-between items-end mt-5">

              <div>
                <p className="uppercase tracking-[4px] text-xs md:text-sm mb-2">
                  Pastry
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  Cupcake
                </h2>
              </div>

              <p className="text-4xl md:text-5xl font-black">
                $3
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <img
              className="w-full h-62 object-cover"
              src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="flex justify-between items-end mt-5">

              <div>
                <p className="uppercase tracking-[4px] text-xs md:text-sm mb-2">
                  Sweet
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  Biscuits
                </h2>
              </div>

              <p className="text-4xl md:text-5xl font-black">
                $2
              </p>

            </div>

          </motion.div>



        </div>

        <div className="flex justify-center mt-15">

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border border-gray-400 px-10 md:px-15 py-4 uppercase tracking-[3px]"
          >
            Explore
          </motion.button>

        </div>
      </div>
      <div className="bg-[#F8F8F8] py-20 px-5 md:px-20 overflow-hidden">

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-20">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-125"
          >

            <p className="uppercase tracking-[5px] text-sm mb-5">
              Our Baker
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none mb-15">
              Meet Our <br />
              Professional <br />
              Baker
            </h1>

            <div className="flex gap-5 items-start">

              <div className="flex flex-col gap-5">

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ↑
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ↓
                </motion.button>

              </div>

              <div>

                <p className="uppercase tracking-[4px] text-sm mb-4">
                  Baker
                </p>

                <h2 className="text-3xl font-semibold mb-5">
                  Stina Gunnarsdottir
                </h2>

                <p className="text-gray-400 leading-8 mb-10 max-w-87">
                  She packed her seven versalia, put her initial into
                  the belt and made herself on the way.
                </p>

                <div className="space-y-5 text-lg">
                  <p>Jaquon Hart</p>
                  <p>Oluchi Mazi</p>
                </div>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute w-80 h-80 md:w-100 md:h-100 bg-[#EAB46D] rounded-full -bottom-5 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="absolute top-20 -left-10">
              <img
                className="w-20"
                src={img5}
                alt=""
              />
            </div>

            <img
              className="w-full max-w-87 md:max-w-md object-cover"
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

          </motion.div>

        </div>
      </div>
      <footer className="bg-[#0F1717] text-white py-20 px-5 md:px-20 overflow-hidden relative">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-15 md:gap-10 items-start">

          <div className="self-start">

            <h1 className="text-5xl md:text-6xl font-black">
              BKR
            </h1>

          </div>

          <div className="self-start">

            <p className="uppercase tracking-[5px] text-sm mb-8">
              Menu
            </p>

            <div className="space-y-4 text-gray-300">
              <p>About</p>
              <p>Product</p>
              <p>Recipes</p>
              <p>Contact</p>
            </div>

          </div>

          <div className="self-start -mt-25 md:mt-0">

            <p className="uppercase tracking-[5px] text-sm mb-8">
              Service
            </p>

            <div className="space-y-4 text-gray-300">
              <p>Bakery</p>
              <p>Delivery</p>
              <p>Catering</p>
              <p>Corporate</p>
            </div>

          </div>

          <div className="self-start -mt-25 md:mt-0">

            <p className="uppercase tracking-[5px] text-sm mb-8">
              Social
            </p>

            <div className="flex gap-4 flex-wrap">

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-[#EAB46D] flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M13 3h4v4h-2c-.6 0-1 .4-1 1v2h3l-1 4h-2v7h-4v-7H8v-4h2V7a4 4 0 0 1 4-4Z" />
                </svg>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-[#EAB46D] flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22 5.8c-.7.3-1.5.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1 7.7 7.7 0 0 1-2.4.9 3.8 3.8 0 0 0-6.5 3.4A10.8 10.8 0 0 1 3 4.8a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.4 3.1 3.8-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1a3.8 3.8 0 0 0 3.5 2.7A7.7 7.7 0 0 1 2 18.6a10.8 10.8 0 0 0 5.8 1.7c7 0 10.9-5.8 10.9-10.9v-.5c.7-.5 1.4-1.2 1.9-2Z" />
                </svg>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-[#EAB46D] flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm6-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </motion.div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-15 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400 text-center">

          <p>
            Copyright © 2020 Laaqiq. All Rights Reserved.
          </p>

          <div className="flex gap-5 md:gap-10">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>

        </div>

      </footer>
    </div>
  );
};

export default App;