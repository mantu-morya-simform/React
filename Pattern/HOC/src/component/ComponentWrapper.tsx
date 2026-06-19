import HocWrapper from "../HOC/HocWrapper";
import Analysis from "./Analysis";
import Posts from "./Posts";

export const PostHoc = HocWrapper(Posts);
export const AnalysisHoc = HocWrapper(Analysis);
