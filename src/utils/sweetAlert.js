import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import colors from "./colors";

const SweetAlert = withReactContent(Swal);

export const showAlert = (message, type) => {
  return SweetAlert.fire({
    title: message,
    icon: type,
    showConfirmButton: false,
    timer: 2500,
  });
};

export const showConfirm = async (message, type) => {
  const { isConfirmed } = await SweetAlert.fire({
    title: message,
    icon: type,
    showCancelButton: true,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.secondary,
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
  });

  return isConfirmed;
};
