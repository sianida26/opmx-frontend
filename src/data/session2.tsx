import { IRouteSession } from "@/interfaces"
import S2P1 from "@/pages/session2/S2P1"
import S2P2 from "@/pages/session2/S2P2"

const session2: IRouteSession[] = [
    {
        page: 1,
        title: "Learning Objectives",
        element: <S2P1 />
    },
    {
        page: 2,
        title: "Background: Science on Fertilising and Weeding",
        element: <S2P2 />
    },
]

export default session2