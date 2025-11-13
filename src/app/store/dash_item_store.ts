import {create} from "zustand"
import {persist,createJSONStorage} from "zustand/middleware"

type dashBoard={
    item:string;
}

type Action = {
    set_item:(item:string)=>void;
    clear_item:()=>void
}
const dash_item_store = create<dashBoard & Action>()(persist((set)=>({
    item:"",
    set_item:(item)=>set({item}),
    clear_item:()=>set({item:""})
}),{
    name:"dash_item_store",
   storage:createJSONStorage(()=>localStorage)
}))

export default dash_item_store