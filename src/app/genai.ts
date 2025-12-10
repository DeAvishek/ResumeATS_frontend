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
        const res = await axios.post("/api/JobRecoGenAi", {ResumeSkill});
        return res.data.result;
    } catch (err) {
        console.error("AI generate error:", err);

    }
}

export default generate;
