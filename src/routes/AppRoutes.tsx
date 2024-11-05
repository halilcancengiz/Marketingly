import { Routes, Route } from "react-router-dom";
import { HomeV1 } from "../pages/HomeV1";
import { HomeV2 } from "../pages/HomeV2";
import { StyleGuidePage } from "../pages/StyleGuidePage";
import Test from "../pages/Test";
import NotFound from "../pages/NotFound";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeV1 />} />
            <Route path="/homev2" element={<HomeV2 />} />
            <Route path="/styleguide" element={<StyleGuidePage />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
