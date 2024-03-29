import React from "react";
import { useState } from "react";
import { toast, Toast } from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { addingRoom } from "../../Api/adminApi/postRequest";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Descriptions } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locations = useLocation();
  const data = locations?.state?.hotelId;

  let Id = data.hotel._id;
  let hotelName=data.hotel.hotel;
  console.log(Id, "Id");

  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [wifi, setWifi] = useState("");

  const [price, setPrice] = useState("");
  const [laundry, setLaundry] = useState("");
  const [AC, setAC] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const cloudAPI = "dxrzjyxr8";
  const addRoom = async (e) => {
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
    console.log(images);
    if (images.length) {
      const addRoom = {
        hotelId: Id,
        hotelName,

        room,
        price,
        description,
        images,
        laundry,
        AC,
        bed,
        wifi,
      };

      try {
        dispatch(showLoading());

        console.log(addRoom, "frond add");
        const result = (await addingRoom(addRoom, Id)).data;
        console.log(result);
        toast.success(result.message);
        navigate("/admin/rooms");
        dispatch(hideLoading());
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeImage = (i) => {
    setImage(image.filter((x) => x.name !== i));
  };

  return (
    <>
      <div>
        <div>
          <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 class="text-xl font-bold text-white capitalize dark:text-white">
              Add Room
            </h1>
            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    Room Type
                  </label>
                  <input
                    id="Type"
                    name="room"
                    type="text"
                    value={room}
                    onChange={(e) => {
                      setRoom(e.target.value);
                    }}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="emailAddress"
                  >
                    Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label class="text-white dark:text-gray-200" for="laundry">
                    Air Condition
                  </label>
                  <select
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={AC}
                    onChange={(e) => setAC(e.target.value)}
                    required
                  >
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>
                <div>
                  <label class="text-white dark:text-gray-200" for="laundry">
                    Bed
                  </label>
                  <select
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={bed}
                    onChange={(e) => setBed(e.target.value)}
                    required
                  >
                    <option>Queen Bed</option>
                    <option>Double Bed</option>
                  </select>
                </div>
                <div>
                  <label class="text-white dark:text-gray-200" for="laundry">
                    Wifi{" "}
                  </label>
                  <select
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={wifi}
                    onChange={(e) => setWifi(e.target.value)}
                    required
                  >
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>
                <div>
                  <label class="text-white dark:text-gray-200" for="category">
                    Laundry Services
                  </label>
                  <select
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={laundry}
                    onChange={(e) => setLaundry(e.target.value)}
                    required
                  >
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
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
                          onChange={(e) => {
                            const fileType = e.target.files[0]["type"];
                            const validate = [
                              "iamge/gif",
                              "image/jpeg",
                              "image/png",
                            ];
                            if (validate.includes(fileType)) {
                              setImage([...image, e.target.files[0]]);
                            } else {
                              toast.error("this type is not allowed");
                            }
                          }}
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
                <div className="flex">
                  <div className=" flex">
                    {image.length > 0 &&
                      image.map((file, key) => {
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
                      })}
                  </div>
                </div>
              </div>
              </div>

              <div class="flex justify-end mt-6">
                <button
                  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                  onClick={addRoom}
                >
                  Add
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
