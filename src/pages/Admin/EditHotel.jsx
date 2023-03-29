import React, { useEffect } from "react";
import { useState } from "react";
import { toast, Toast } from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { updateHotel } from "../../Api/adminApi/postRequest";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Descriptions } from "antd";
import { useFetcher, useLocation, useNavigate } from "react-router-dom";
import { hotelById } from "../../Api/adminApi/getRequest";

export default function EditHotel() {
  
  const dispatch = useDispatch();
  const locations = useLocation();
  const data = locations?.state?.hotelId;
  let Hotel = data.hotel;
  const Id =Hotel._id
  const navigate=useNavigate()


  const [hotel, setHotel] = useState(Hotel.hotel);
  const [location, setLocation] = useState(Hotel.location);
  const [category, setCategory] = useState(Hotel.category);
  const [description, setDescription] = useState(hotel.description);
  const [image, setImage] = useState([]);
  const cloudAPI = "dxrzjyxr8";

  

  const editHotel = async (e) => {
    e.preventDefault();
    dispatch(showLoading());

    const formData = new FormData();

    let images = [];
    for (let i = 0; i < image.length; i++) {
      formData.append("file", image[i]);
      formData.append("upload_preset", "Bookit");
      console.log(formData);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      );
      const imageUrl = response.data.url;
      images.push(imageUrl);
    }
    if (images.length) {
      const update = {
        // id: Id,
        hotel,
        location,
        description,
        category,
        images,
      };

      try {
        // dispatch(showLoading());

        console.log(update, "frond add");
        const result =
          (await updateHotel(update,Id)).data;
        console.log(result);
        toast.success(result.message);
        setHotel("");
        setDescription("");
        setLocation("");
        setImage("");
        dispatch(hideLoading());
      } catch (error) {
        console.log(error);
      }
    }
    navigate("/admin/hotels");
  };
  const removeImage = (i) => {
    setImage(image.filter((x) => x.name !== i));
  };

  useEffect(() => {
    // getHotelById(Id);
  }, []);

  return (
    <div>
      <div>
        {/* {hotel.map((hotel)=>{})} */}
        <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">
            Edit Hotel
          </h1>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="username">
                  Name
                </label>
                <input
                  id="hotel"
                  name="hotel"
                  type="text"
                  value={hotel ? hotel : Hotel?.hotel}
                  onChange={(e) => {
                    setHotel(e.target.value);
                  }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location ? location : Hotel?.location}
                  onChange={(e) => setLocation(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="category">
                  Category
                </label>
                <select
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category?category:Hotel?.category}
                  required
                >
                  <option>Vlla</option>
                  <option>Resort</option>
                </select>
              </div>

              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description ? description : Hotel?.description}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  required
                ></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-white">
                  Image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="files[]"
                          onChange={(e) =>
                            setImage([...image, e.target.files[0]])
                          }
                          type="file"
                          multiple
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" flex">
                  {image && image.length > 0
                    ? image.map((file, key) => {
                        console.log(file, "filesssss");
                        if (file) {
                          console.log("yes");
                        } else {
                          console.log("yes");
                        }
                        return (
                          <div className="left flex justify-end ">
                            <i
                              onClick={() => {
                                removeImage(file.name);
                              }}
                              className="mdi mdi-close absolute  hover:text-white cursor-pointer"
                            >
                              <div className="flex">
                                {React.createElement(AiOutlineCloseCircle, {
                                  size: "20",
                                })}
                              </div>
                            </i>
                            l
                            <img src={URL.createObjectURL(file)} alt="" />
                          </div>
                        );
                      })
                    : Hotel
                    ? Hotel?.images.map((img) => (
                        <div className="left flex justify-end ">
                          <i
                            onClick={() => {
                              removeImage(img.name);
                            }}
                            className="mdi mdi-close absolute  hover:text-white cursor-pointer"
                          >
                            <div className="flex">
                              {React.createElement(AiOutlineCloseCircle, {
                                size: "20",
                              })}
                            </div>
                          </i>
                          l
                          <img src={img} alt="" />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                onClick={editHotel}
              >
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
