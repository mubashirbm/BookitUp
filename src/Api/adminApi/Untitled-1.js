



export const uploadAPI = axios.create({
  baseURL: "http://localhost:5500/admin",
});
uploadAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("adminToken")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("adminToken");
    req.headers['Content-Type'] = 'multipart/form-data';
  }
  return req;
});






export const addingHotel=async (addHotel)=>{
    const data=await uploadAPI.post('/AddHotel',addHotel)
    return data
}




router.route("/addHotel").post(upload.array('files'),authMiddleware,controller.addHotel)