// Tüm state'lerin toplanacağı yerdir.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    cart: cartReducer
})

// Bütün reducer'lara tek bir yer üzerinden erişmek için rootReducer tanımladık.
// combineReducers() bu fonksiyon redux ile birlikte gelmektedir.
// Örneğin başka reducer'larıda toplamak istiyorsak aşağıdaki gibi virgülle
// ayırarak ekleriz.
// cart: cartReducer,
// user: userReducer
// Dolayısıyla tüm state'leri bir yerde böylece toplamış oluruz.

export default rootReducer;

// Burada const ile tanımladığımız rootReducer değerini export default ifadesiyle 
// çıkarabiliriz. Dolayısıyla import ederken süslü parantez kullamayız.