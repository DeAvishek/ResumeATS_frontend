import {create} from "zustand"
import {persist,createJSONStorage} from "zustand/middleware"
type skills = {
    resume_skill:string[],
    job_skill:string[]
    score:number
}

type Actions ={
    set_skill:(resume_skill:string[],job_skill:string[],score:number)=>void
    clear_skill:()=>void
}

const SkillDataSore = create<skills & Actions>()(persist((set)=>({
    resume_skill:[],
    job_skill:[],
    score:0,
    set_skill:(resume_skill,job_skill,score)=>set({resume_skill,job_skill,score}),
    clear_skill:()=>set({resume_skill:[],job_skill:[]})
}),{
    name:"Skill_data_store",
   storage:createJSONStorage(()=>localStorage)
}))

export default SkillDataSore