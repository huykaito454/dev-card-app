import React from "react";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function App() {
  return (
    <>
      <div className="header bg-header flex items-center justify-between px-2">
        <div className="logo w-[25%]">
          <img
            src={require("./assets/image/logo.png")}
            alt=""
            className="w-20"
          />
        </div>
        <div className="title text-3xl font-bold w-[50%] text-center">
          Dev Card Generator
        </div>
        <div className="button-group flex gap-x-2 w-[25%] justify-end">
          <div className="button bg-primary px-4 py-1 rounded-2xl font-medium">
            Login
          </div>
          <div className="button bg-white text-black px-4 py-1 rounded-2xl font-medium mr-3">
            SignUp
          </div>
        </div>
      </div>

      <div className="main page-container mt-10 p-2 ">
        <div className="cursor-pointer dev-list select-none">
          <Swiper
            grabCursor={"true"}
            spaceBetween={40}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)",
                }}
              >
                <div className="name text-2xl font-bold text-ellipsis overflow-hidden">
                  @nthuy
                </div>
                <div className="card-content">
                  <div className="information mb-3">
                    <p className="text-4xl font-bold">21</p>
                    <p>Frontend Developer </p>
                  </div>
                  <div className="skills flex flex-col gap-y-1 mb-3">
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item ">
                      <div className="skill-item-name text-xs mb-1">Github</div>
                      <div className="w-[55%] bg-gray-500 h-1 rounded-lg">
                        <div
                          className="bg-white h-1 rounded-lg"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="socials flex items-center">
                    <img
                      src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/github.png"
                      alt=""
                    />
                    <img
                      src="https://img.icons8.com/fluency/35/000000/linkedin.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;
