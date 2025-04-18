import { getNewArrivals, getShoppingItems } from "@/services/productsService";
import { collectionsActions } from "@/slices/collectionsSlice";
import { newArrivalsActions } from "@/slices/newArrivalsSlice";
import { convertToShoppingItem } from "@/utils/convertJsonProductToShoppingItem";

export const getNewArrivalsDispatch =
  () =>
  async (
    dispatch: (arg0: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: any;
      type: "newArrival/setNewArrivals" | "newArrival/setIsLoading";
    }) => void
  ) => {
    try {
      const products = await getNewArrivals();
      //   convert items to shopping item
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const prds = [...products.data.data.data].map((item: any) => {
        console.log(item);
        return convertToShoppingItem(item);
      });
      dispatch(newArrivalsActions.setNewArrivals(prds));
      dispatch(newArrivalsActions.setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(newArrivalsActions.setIsLoading(false));
    }
  };

export const getAllShoppingItemsDispatch =
  (
    name?: string,
    category?: string,
    clothType?: string,
    dressStyle?: string,
    price?: string,
    sort?: string,
    colors?: string,
    sizes?: string,
    limit?: string
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (dispatch: any) => {
    dispatch(collectionsActions.setIsLoading(true));
    try {
      const res = await getShoppingItems(
        name,
        category,
        clothType,
        dressStyle,
        price,
        sort,
        colors,
        sizes,
        limit
      );

      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const products = res.data.data.data.map((item: any) =>
        convertToShoppingItem(item)
      );
      dispatch(collectionsActions.setCollections(products));
      dispatch(collectionsActions.setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(collectionsActions.setIsLoading(false));
    }
  };
