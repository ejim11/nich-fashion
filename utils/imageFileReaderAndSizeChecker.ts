import { toastError } from "./toastFuncs";
import { ToastIcon } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileHandler = (file: any) => {
  if (file) return URL.createObjectURL(file);
};

export const checkImageSize = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any,
  errorIcon: ToastIcon,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImage: (file: any) => void
) => {
  console.log(file);

  // Check image size
  if (file.size > 3 * 1024 * 1024) {
    toastError("Image size is above 3Mb", errorIcon);
    return;
  }

  setImage(file);

  // Read the image file and check its resolution
  // const reader = new FileReader();

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // reader.onload = (event: any) => {
  //     const img = new Image();
  //     img.src = event.target.result;

  //     img.onload = () => {
  //         const width = img.width;
  //         const height = img.height;

  //         // Check if the image resolution meets the requirement
  //         if (width >= 1920 && height >= 1005) {
  //             setImage(file);
  //         } else {
  //             toastError(
  //                 "Image resolution is too low! Minimum required: 1920x1005",
  //                 errorIcon
  //             );
  //         }
  //     };
  // };

  // reader.readAsDataURL(file);
};
