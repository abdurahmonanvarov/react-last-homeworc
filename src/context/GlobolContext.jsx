import { createContext, useEffect, useReducer } from "react";

// Reducer function
const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, selektPtoducts: [...state.selektPtoducts, payload] };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
    case "COLCULATE":
      return { ...state, totelPrice: payload[0], totelAmount: payload[1] };
    case "REMUV_PROD":
      return { ...state, selektPtoducts: payload };
    case "CHANGE_AMOUNT":
      return {
        ...state,
        selektPtoducts: payload,
      };
    default:
      return state;
  }
};

export const GlobolContext = createContext();

export function GlobolContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selektPtoducts: [],
    totelPrice: 0,
    totelAmount: 0,
  });

  // Dispatching action inside useEffect to avoid calling it on each render
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  //calculate
  const calculate = () => {
    let allPrice = 0;
    let allAmount = 0;

    if (state.selektPtoducts.length) {
      state.selektPtoducts.forEach((prod) => {
        allPrice += prod.price * prod.amount;
        allAmount += prod.amount;
      });
    }

    dispatch({ type: "COLCULATE", payload: [allPrice, allAmount] });
  };

  //add item
  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    calculate();
  };

  //delet prduct
  const deletProduct = (id) => {
    const filterProduct = state.selektPtoducts.filter((prod) => prod.id !== id);
    dispatch({ type: "REMUV_PROD", payload: filterProduct });
  };

  //changeAmount
  const changeAmount = (id, ty) => {
    if (ty == "increase") {
      const amounys = state.selektPtoducts.map((prev) => {
        if (prev.id == id) {
          return { ...prev, amount: prev.amount + 1 };
        } else {
          return prev;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: amounys });
    } else {
      const amounys = state.selektPtoducts.map((prev) => {
        if (prev.id == id) {
          return { ...prev, amount: prev.amount - 1 };
        } else {
          return prev;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: amounys });
    }
  };

  //useEffect
  useEffect(() => {
    calculate();
  }, [state.selektPtoducts]);

  return (
    <GlobolContext.Provider
      value={{
        ...state,
        dispatch,
        changeColor,
        addProduct,
        deletProduct,
        changeAmount,
      }}
    >
      {children}
    </GlobolContext.Provider>
  );
}
