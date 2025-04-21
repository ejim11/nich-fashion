/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDeliveryStateInfoService } from "@/services/deliveryStatesService";
import { deliveryStateActions } from "@/slices/deliveryStateSlice";

export const getDeliveryStateDispatch =
  (state: string) => async (dispatch: any) => {
    try {
      const res = await getDeliveryStateInfoService(state);
      if (res.data.data.id) {
        const { id, fee, state } = res.data.data;

        dispatch(
          deliveryStateActions.addDeliveryState({ id, fee, userState: state })
        );
      } else {
        dispatch(
          deliveryStateActions.addDeliveryState({
            id: "",
            fee: 0,
            userState: "",
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
