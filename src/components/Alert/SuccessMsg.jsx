import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { resetSuccesAction } from "../../redux/slices/globalSlice/globalSlice";

const SuccessMsg = ({ message }) => {
  const dispatch = useDispatch();
  Swal.fire({
    icon: "success",
    title: "Good Job",
    text: message,
  });
  dispatch(resetSuccesAction());
};

export default SuccessMsg;