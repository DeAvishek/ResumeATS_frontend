import axios from "axios"
type skill = string
type ResumeSkill = string[]
const generate = async (skill:skill) => {
    try {
        const res = await axios.post("/api/skillMatterAi", {skill:skill});
        if(res.status==200)return res.data.result;
    } catch (err) {
        console.error("AI generate error:", err);
        return ""; // avoid breaking frontend loops
    }
};

export const JobMatchGenerate = async (ResumeSkill:ResumeSkill) => {
    try {
        console.log("hii from genAi ts..",ResumeSkill)
        const AllSkills = ResumeSkill.join(",")
        const res = await axios.post(`/api/JobRecoGenAi`, {AllSkills});
        if(res.data.status===200){
            console.log(res.data.recommendations) //todo remove
            return res.data.result;
        }
        console.log("Nothing") //todo remove
        return "";

    } catch (err) {
        console.error("AI generate error:", err);
        return "";
    }
}

export default generate;
